import _ from 'lodash';
import React from 'react';

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
        return !_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState);
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
