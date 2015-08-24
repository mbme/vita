import React from 'react';
import {intersection} from 'lodash';
import EventBus from './bus';

export const bus = new EventBus();

export class Container extends React.Component {
  triggerMethod(name, ...args) {
    this[name] && this[name](...args);
  }

  componentWillMount() {
    this.state = this.getState();
    this.triggerMethod('onInitialize');
    bus.subscribe('!stores-update', this.onStoresUpdate, this)
  }

  componentWillUnmount() {
    this.triggerMethod('onDestroy');
    bus.unsubscribe('!stores-update', this.onStoresUpdate)
  }

  onStoresUpdate(...stores) {
    if (intersection(stores, this.stores).length) {
      this.setState(this.getState());
    }
  }
}

const STORES = {};

export function getStore(name) {
  let store = STORES[name];

  if (!store) {
    store = {};
    console.warn(`getter: unknown store ${name}`);
  }

  return store;
}

export function registerStore(name, store) {
  STORES[name] = store;
}

function isRegisteredStore(name) {
  return STORES.hasOwnProperty(name);
}

export function publishStoreUpdate(...stores) {
  stores.forEach(function (store) {
    if (!isRegisteredStore(store)) {
      console.warn(`publisher: unknown store ${store}`);
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

// Component decorator
export function Stores(...stores) {
  return function (Comp) {

    // return wrapped component constructor function
    return function (...args) {
      let comp = new Comp(...args);

      // add property "stores"
      comp.stores = stores;

      // override "getState" to always receive stores as input args
      let getState = comp.getState;
      comp.getState = function () {
        return getState.apply(this, stores.map(getStore));
      };

      return comp;
    }
  }
}
