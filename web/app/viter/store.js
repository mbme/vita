import { forEach, keys } from 'lodash';
import EventBus from 'viter/bus';

const bus = new EventBus();
const UPDATE_EVENT = '!store-update';

let storeProps = {};

let batchUpates = false;
let updateHappened = false;

function setProperty (name, initialValue) {
  let value = initialValue;

  Object.defineProperty(storeProps, name, {
    configurable: true, // allow to delete it
    enumerable: true, // allow to iterate over props

    get () {
      return value;
    },

    set (newValue) {
      if (value === newValue) {
        return;
      }
      // TODO freeze here!
      value = newValue;

      if (batchUpates) {
        updateHappened = true;
      } else {
        bus.publish(UPDATE_EVENT);
      }
    }
  });
}

function deleteProperty (name) {
  delete storeProps[name];
}

function clearStore () {
  keys(storeProps).forEach(deleteProperty);
}

/**
 * Register store properties and their default values.
 * Clears all previously stored values.
 * @param {object} defaults {propName: defaultValue}
 */
export function initStore (defaults) {
  clearStore();
  forEach(defaults, (initialValue, name) => setProperty(name, initialValue));
  bus.publish(UPDATE_EVENT);
}

/**
 * Execute store updates in a batch as a single update.
 * @param {Function} updater function which contains store updates
 */
export function inBatch (updater) {
  batchUpates = true;
  updateHappened = false;

  updater();

  batchUpates = false;
  if (updateHappened) {
    bus.publish(UPDATE_EVENT);
  }
}

/**
 * Add new listener for store updates.
 * @param {Function} listener
 */
export function addStoreListener (listener) {
  bus.subscribe(UPDATE_EVENT, listener);
}

/**
 * Remove store listener.
 * @param {Function} listener
 */
export function removeStoreListener (listener) {
  bus.unsubscribe(UPDATE_EVENT, listener);
}


/**
 * App store, which can be mutated only through its prototype - storeProps.
 */
export const STORE = Object.freeze(Object.create(storeProps));
