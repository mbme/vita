import React from 'react';
import _ from 'lodash';
import Immutable from 'immutable';

import { STORE, addStoreListener, removeStoreListener } from './store';

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
      addStoreListener(this.onStoreUpdate);
      if (comp.componentWillMount) {
        comp.componentWillMount.apply(this, args);
      }
    },

    componentWillUnmount (...args) {
      removeStoreListener(this.onStoreUpdate);
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
      addStoreListener(updateComponent);
    },

    destroy () {
      removeStoreListener(updateComponent);
    }
  };
}
