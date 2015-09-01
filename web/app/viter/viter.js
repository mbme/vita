import React from 'react';
import {intersection, forEach} from 'lodash';
import EventBus from './bus';

export const bus = new EventBus();

const STORES = {};

export function getStore(name) {
  let store = STORES[name];

  if (store) {
    return store;
  } else {
    console.error(`getter: unknown store ${name}`);
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
      console.error(`publisher: unknown store ${store}`);
    }
  });
  bus.publish('!stores-update', ...stores);
}

export function registerAction(event, handler) {
  bus.subscribe(event, function (...params) {
    let updatedStores = [].concat(handler(...params) || []);
    publishStoreUpdate(...updatedStores);
  });
}

function returnTrue() {
  return true;
}

export class Container extends React.Component {
  triggerMethod(name, ...args) {
    this[name] && this[name](...args);
  }

  componentWillMount() {
    // override "getState" to always receive stores as input args
    let getState = this.getState;
    if (!getState) {
      throw "getState must be provided";
    }
    this.getState = function () {
      return getState.apply(this, getStores(...this.stores));
    };

    this.state = this.getState();

    this.triggerMethod('onInitialize');
    bus.subscribe('!stores-update', this.onStoresUpdate, this)
  }

  componentWillUnmount() {
    this.triggerMethod('onDestroy');
    bus.unsubscribe('!stores-update', this.onStoresUpdate)
  }

  onStoresUpdate(...stores) {
    if (!intersection(stores, this.stores).length) {
      return;
    }

    let newState = this.getState();

    if ((this.shouldUpdate || returnTrue)(this.state, newState)) {
      this.setState(newState);
    }
  }
}

export function CreateStoreWatcher(config) {
  let state = null;

  function getState() {
    return config.getState(...(getStores(...config.stores)));
  }

  let watcher = function (...stores) {
    if (!intersection(stores, config.stores).length) {
      return;
    }

    let newState = getState();

    // check if we need re-render after store updated
    if ((config.shouldUpdate || returnTrue)(state, newState)) {
      state = newState;
      config.render(state);
    }
  };
  return {
    start (runNow = true) {
      state = getState();

      if (runNow) {
        watcher(...config.stores);
      }

      bus.subscribe('!stores-update', watcher);
    },

    stop () {
      bus.unsubscribe('!stores-update', watcher);
    }
  }
}
