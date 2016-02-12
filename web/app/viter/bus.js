function arrAppend (arr, item) {
  arr.push(item);
  return arr;
}

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

  publish (event, ...args) {
    this._getListeners(event).forEach(l => l.handler.apply(l.context, args));
  }

  subscribe (event, handler, context) {
    this._setListeners(event, arrAppend(this._getListeners(event), { handler, context }));
  }

  unsubscribe (event, handler) {
    this._setListeners(event, this._getListeners(event).filter(l => l.handler !== handler));
  }
}
