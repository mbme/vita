import _ from 'lodash';

function arrAppend (arr, item) {
  arr.push(item);
  return arr;
}

/**
 * Check if event name is ok and throw error otherwise.
 * @param {string!} event
 */
function validateEvent (event) {
  if (!_.isString(event) || !event) {
    throw new Error('event must be non-empty string');
  }
}

/**
 * Check if event handler is ok and throw error otherwise.
 * @param {function!} handler
 */
function validateHandler (handler) {
  if (!_.isFunction(handler)) {
    throw new Error('event handler must be a function');
  }
}

/**
 * Simple pub-sub.
 */
export default class EventBus {
  constructor () {
    this._listenersMap = {};
  }

  _getListeners (event) {
    return this._listenersMap[event] || [];
  }

  _setListeners (event, listeners) {
    this._listenersMap[event] = listeners;
  }

  /**
   * Notify event subscribers about event.
   * @param {string!} event
   * @param {any...} args
   */
  publish (event, ...args) {
    validateEvent(event);
    this._getListeners(event).forEach(l => l.handler.apply(l.context, args));
  }

  /**
   * Subscribe for event.
   * @param {string!} event
   * @param {function!} handler
   * @param {object} [context] context for handler
   */
  subscribe (event, handler, context) {
    validateEvent(event);
    validateHandler(handler);
    this._setListeners(event, arrAppend(this._getListeners(event), { handler, context }));
  }

  /**
   * Unsubscribe event handler.
   * @param {string!} event
   * @param {function!} handler
   */
  unsubscribe (event, handler) {
    validateEvent(event);
    validateHandler(handler);
    this._setListeners(event, this._getListeners(event).filter(l => l.handler !== handler));
  }
}
