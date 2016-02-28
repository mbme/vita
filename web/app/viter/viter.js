/* eslint no-param-reassign: [2, {"props": false}] */
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
      },
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

function applyPropSelector (obj, propSelector) {
  if (_.isFunction(propSelector)) {
    return propSelector(obj);
  }

  return _.pick(obj, propSelector);
}

/**
 * Wrap Component into higher-order React component
 * which injects store properties and/or actions.
 * @param {ReactComponent} Component component to wrap
 * @param {{ store, actions }} property selectors for store or actions
 * @returns {ReactComponent} wrapped component
 */
export function connectReactComponent (Component, { store, actions }) {
  return createReactComponent({
    displayName: `${Component.displayName}Connector`,

    componentWillMount () {
      if (store) {
        this.onStoreUpdate();
        GlobalStore.addListener(this.onStoreUpdate);
      }
      if (actions) {
        this.setState(applyPropSelector(Actions, actions));
      }
      // FIXME throw error on prop names clashes
    },

    componentWillUnmount () {
      if (store) {
        GlobalStore.removeListener(this.onStoreUpdate);
      }
    },

    onStoreUpdate () {
      this.setState(applyPropSelector(GlobalStore, store));
    },

    render () {
      return (
          <Component {...this.props} {...this.state} />
      );
    },
  });
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
    },
  };
}
