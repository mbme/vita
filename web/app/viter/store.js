import { forEach } from 'lodash';
import EventBus from './bus';

const bus = new EventBus();

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
  forEach(defaults, function (initialValue, name) {
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

        bus.publish('!store-update');
      }
    });
  });
}

export function inBatch (updater) {
  batchUpates = true;
  updater();
  batchUpates = false;
  bus.publish('!store-update');
}

export function addStoreListener (listener) {
  bus.subscribe('!store-update', listener);
}

export function removeStoreListener (listener) {
  bus.unsubscribe('!store-update', listener);
}
