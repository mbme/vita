import React from 'react';
import {intersection} from 'lodash';
import EventBus from './bus';

function returnTrue() {
  return true;
}

export const bus = new EventBus();

export class Container extends React.Component {
  triggerMethod(name, ...args) {
    this[name] && this[name](...args);
  }

  componentWillMount() {
    this.state = this.getState();
    if (!this.shouldUpdate) {
      this.shouldUpdate = returnTrue;
    }
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

    if (this.shouldUpdate(this.state, newState)) {
      this.setState(newState);
    }
  }
}

export function StoreWatcher({stores: names, getState: getState, shouldUpdate: shouldUpdate=returnTrue, render: render}, runNow=false) {
  let state = getState(...(names.map(getStore)));
  runNow && render(state);

  bus.subscribe('!stores-update', function (...stores) {
    if (!intersection(stores, names).length) {
      return;
    }

    let newState = getState(...(names.map(getStore)));

    if (shouldUpdate(state, newState)) {
      state = newState;
      render(state);
    }
  });
}


const STORES = {};

export function getStore(name) {
  let store = STORES[name];

  if (store) {
    return store;
  } else {
    console.error(`getter: unknown store ${name}`);
  }
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
