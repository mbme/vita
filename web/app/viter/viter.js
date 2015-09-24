import React from 'react';
import {intersection, forEach, defaults} from 'lodash';
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
  forEach(mappings, (store, name) => setStore(name, store))
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

export function registerAction(event, handler) {
  bus.subscribe(event, function (...params) {
    // handler can return nothing, one item or array of items
    // so here we convert everything to array
    let updatedStores = [].concat(handler(...params) || []);

    // publish update only when something really updated
    updatedStores.length && publishStoreUpdate(...updatedStores);
  });
}

function returnTrue() {
  return true;
}

export function createReactComponent (comp) {
  return React.createClass(comp)
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
      if (!intersection(stores, comp.stores).length) {
        return;
      }

      let newState = this.getState();

      if ((comp.shouldUpdate || returnTrue).call(this, this.state, newState)) {
        this.setState(newState);
      }
    }
  };

  return React.createClass(defaults(config, comp));
}

export function createComponent(config) {
  let state = null;

  return function (...stores) {
    if (!intersection(stores, config.stores).length) {
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
