import React from 'react';
import _ from 'lodash';
import EventBus from './bus';

export const bus = new EventBus();

const STORES = {};

export function getStore(name) {
  let store = STORES[name];

  if (store) {
    return store;
  } else {
    throw `getter: unknown store ${name}`;
  }
}

export function getStores(...names) {
  return names.map(getStore);
}

export function setStore(name, store) {
  STORES[name] = store;
}

export function setStores (mappings) {
  _.forEach(mappings, (store, name) => setStore(name, store))
}

function isRegisteredStore(name) {
  return STORES.hasOwnProperty(name);
}

export function publishStoreUpdate(...stores) {
  stores.forEach(function (store) {
    if (!isRegisteredStore(store)) {
      throw `publisher: unknown store ${store}`;
    }
  });
  bus.publish('!stores-update', ...stores);
}

function returnTrue() {
  return true;
}

export function createReactComponent (comp) {
  let config;

  if (_.isFunction(comp)) {
    config = {
      displayName: comp.name,

      shouldComponentUpdate: function (nextProps) {
        return !_.eq(this.props, nextProps);
      },

      render: function () {
        return comp(this.props);
      }
    }
  } else {
    config = comp;
  }

  return React.createClass(config)
}

export function createReactContainer (comp) {
  if (!comp.getState) {
    throw `component ${comp.displayName}: missing getState`;
  }

  let config = {
    componentWillMount (...args) {
      bus.subscribe('!stores-update', this.onStoresUpdate);
      comp.componentWillMount && comp.componentWillMount.apply(this, args)
    },

    componentWillUnmount (...args) {
      bus.unsubscribe('!stores-update', this.onStoresUpdate);
      comp.componentWillUnmount && comp.componentWillUnmount.apply(this, args)
    },

    getState () {
      return comp.getState.apply(this, getStores(...comp.stores));
    },

    getInitialState () {
      return this.getState();
    },

    onStoresUpdate (...stores) {
      if (!_.intersection(stores, comp.stores).length) {
        return;
      }

      let newState = this.getState();

      if ((comp.shouldUpdate || returnTrue).call(this, this.state, newState)) {
        this.setState(newState);
      }
    }
  };

  return createReactComponent(_.defaults(config, comp));
}

export function createComponent(config) {
  let state = null;

  return function (...stores) {
    if (!_.intersection(stores, config.stores).length) {
      return;
    }

    let newState = config.getState(...(getStores(...config.stores)));

    // check if we need re-render after store updated
    if ((config.shouldUpdate || returnTrue).call(config, state, newState)) {
      state = newState;
      config.render(state);
    }
  };
}
