import React from 'react';
import _ from 'lodash';
import Immutable from 'immutable';
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

function getStores(...names) {
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

//@see https://github.com/jurassix/react-immutable-render-mixin
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  let bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let i = 0; i < keysA.length; i+=1) {
    if (!bHasOwnProperty(keysA[i]) || !Immutable.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function notShallowEqual(...args) {
  return !shallowEqual(...args);
}

export function createReactComponent (comp) {
  let config;

  if (_.isFunction(comp)) {
    config = {
      displayName: comp.name,

      shouldComponentUpdate: function (nextProps) {
        return !shallowEqual(this.props, nextProps);
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
      // update state if updated at least one of stores
      if (_.intersection(stores, comp.stores).length) {
        this.setState(this.getState());
      }
    }
  };

  return createReactComponent(_.defaults(config, comp, {
    shouldComponentUpdate (nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) ||
        !shallowEqual(this.state, nextState);
    }
  }));
}

export function createComponent(config) {
  let state = null;

  const shouldUpdate = config.shouldComponentUpdate || notShallowEqual;

  return function (...stores) {
    if (!_.intersection(stores, config.stores).length) {
      return;
    }

    let newState = config.getState(...(getStores(...config.stores)));

    // check if we need re-render after store updated
    if ((shouldUpdate).call(config, state, newState)) {
      state = newState;
      config.render(state);
    }
  };
}
