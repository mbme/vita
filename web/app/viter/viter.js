import React from 'react';
import _ from 'lodash';
import Immutable from 'immutable';
import EventBus from './bus';

export const bus = new EventBus();

/**
 * App store
 */
export const STORE = {};

let batchUpates = false;

/**
 * Register store properties and their default values.
 * @param {object} defaults {propName: defaultValue}
 */
export function initStore (defaults) {
  _.forEach(defaults, function (initialValue, name) {
    let value = initialValue;
    Object.defineProperty(STORE, name, {
      get () {
        return value;
      },

      set (newValue) {
        value = newValue;

        if (batchUpates) {
          return;
        }

        bus.publish('!store-update', name);
      }
    });
  });
}

export function batchStoreUpdates (updater) {
  batchUpates = true;
  updater();
  batchUpates = false;
  bus.publish('!store-update');
}

// @see https://github.com/jurassix/react-immutable-render-mixin
function shallowEqual (objA, objB) {
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
  for (let i = 0; i < keysA.length; i += 1) {
    if (!bHasOwnProperty(keysA[i]) || !Immutable.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function notShallowEqual (...args) {
  return !shallowEqual(...args);
}

export function createReactComponent (comp) {
  let config;

  if (_.isFunction(comp)) {
    config = {
      displayName: comp.name,

      shouldComponentUpdate (nextProps) {
        return !shallowEqual(this.props, nextProps);
      },

      render () {
        return comp(this.props);
      }
    };
  } else {
    config = comp;
  }

  return React.createClass(config);
}

export function createReactContainer (comp) {
  if (!comp.getState) {
    throw new Error(`component ${comp.displayName}: missing getState`);
  }

  let config = {
    componentWillMount (...args) {
      bus.subscribe('!store-update', this.onStoreUpdate);
      if (comp.componentWillMount) {
        comp.componentWillMount.apply(this, args);
      }
    },

    componentWillUnmount (...args) {
      bus.unsubscribe('!store-update', this.onStoreUpdate);
      if (comp.componentWillUnmount) {
        comp.componentWillUnmount.apply(this, args);
      }
    },

    getInitialState () {
      return this.getState(STORE);
    },

    onStoreUpdate () {
      this.setState(this.getState(STORE));
    }
  };

  return createReactComponent(_.defaults(config, comp, {
    shouldComponentUpdate (nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) ||
        !shallowEqual(this.state, nextState);
    }
  }));
}

export function createComponent (config) {
  let state = null;

  const shouldUpdate = config.shouldComponentUpdate || notShallowEqual;

  function updateComponent () {
    let newState = config.getState(STORE);

    // check if we need re-render after store updated
    if (shouldUpdate.call(config, state, newState)) {
      state = newState;
      config.render(state);
    }
  }

  return {
    init () {
      bus.subscribe('!store-update', updateComponent);
    },

    destroy () {
      bus.unsubscribe('!store-update', updateComponent);
    }
  };
}
