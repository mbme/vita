import React from 'react';
import _ from 'lodash';
import Immutable from 'immutable';

import { STORE, addStoreListener, removeStoreListener } from 'viter/store';

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

/**
 * Create new React component.
 * At least displayName and render are required.
 * @param {object} comp component config
 * @returns {ReactClass}
 */
export function createReactComponent (comp) {
  if (!_.isPlainObject(comp)) {
    throw new Error('component config must be an object');
  }

  ['displayName', 'render'].forEach(function (prop) {
    if (!_.hasIn(comp, prop)) {
      throw new Error(`${prop} is mandatory`);
    }
  });

  return React.createClass(
    _.defaults(comp, {
      shouldComponentUpdate (nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) ||
          !shallowEqual(this.state, nextState);
      }
    })
  );
}


/**
 * Create new React container which listens to changes in STORE.
 * getState must be provided.
 * @param {object} comp container config
 * @returns {ReactClass}
 */
export function createReactContainer (comp) {
  if (!_.isPlainObject(comp)) {
    throw new Error('container config must be an object');
  }

  if (!_.isFunction(comp.getState)) {
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

  return createReactComponent(_.defaults(config, comp));
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
