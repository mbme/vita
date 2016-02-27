import _ from 'lodash';
import React from 'react';
import Immutable from 'immutable';

function validateConfig (config, ...props) {
  if (!_.isPlainObject(config)) {
    throw new Error('config must be an object');
  }

  props.forEach(function (prop) {
    if (!_.hasIn(config, prop)) {
      throw new Error(`'${prop}' is required`);
    }
  });
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

/**
 * Create new React component.
 * At least 'displayName' and 'render' must be provided.
 * @param {object} config component config
 * @returns {ReactClass}
 */
export function createReactComponent (config) {
  validateConfig(config, 'displayName', 'render');

  return React.createClass(
    _.defaults(config, {
      shouldComponentUpdate (nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) ||
          !shallowEqual(this.state, nextState);
      }
    })
  );
}

/**
 * Store instance.
 */
let GlobalStore;
let Actions;

export function setStore (STORE) {
  GlobalStore = STORE;
}

export function setActions (actions) {
  Actions = actions;
}

/**
 * Create new React container which listens to changes in STORE.
 * At least 'displayName', 'getState' and 'render' must be provided.
 * @param {object} config container config
 * @returns {ReactClass}
 */
export function createReactContainer (config) {
  validateConfig(config, 'displayName', 'render');

  let comp = {
    componentWillMount (...args) {
      if (config.getState) {
        GlobalStore.addListener(this.onStoreUpdate);
      }
      this.actions = Actions;
      if (config.componentWillMount) {
        config.componentWillMount.apply(this, args);
      }
    },

    componentWillUnmount (...args) {
      if (config.getState) {
        GlobalStore.removeListener(this.onStoreUpdate);
      }
      if (config.componentWillUnmount) {
        config.componentWillUnmount.apply(this, args);
      }
    },

    getInitialState () {
      if (config.getState) {
        return this.getState(GlobalStore);
      }

      if (config.getInitialState) {
        return config.getInitialState.apply(this);
      }

      return null;
    },

    onStoreUpdate () {
      this.setState(this.getState(GlobalStore));
    }
  };

  return createReactComponent(_.defaults(comp, config));
}

/**
 * Create new component.
 * At least 'getState' and 'render' must be provided.
 * @param {object} comp component config
 * @returns {ReactClass}
 */
export function createComponent (config) {
  validateConfig(config, 'render', 'getState');

  let state = null;

  const shouldUpdate = config.shouldComponentUpdate || notShallowEqual;

  function updateComponent () {
    let newState = config.getState(GlobalStore);

    // check if we need re-render after store updated
    if (shouldUpdate.call(config, state, newState)) {
      state = newState;
      config.render(state);
    }
  }

  return {
    init () {
      GlobalStore.addListener(updateComponent);
      config.actions = Actions;
    },

    destroy () {
      GlobalStore.removeListener(updateComponent);
    }
  };
}
