import { forEach } from 'lodash';
import EventBus from 'viter/bus';

const UPDATE_EVENT = '!store-update';

export default function createStore (config) {
  const bus = new EventBus();

  let batchUpates = false;
  let updateHappened = false;

  let storeProps = {

    /**
     * Add new listener for store updates.
     * @param {Function} listener
     */
    addListener (listener) {
      bus.subscribe(UPDATE_EVENT, listener);
    },

    /**
     * Remove store listener.
     * @param {Function} listener
     */
    removeListener (listener) {
      bus.unsubscribe(UPDATE_EVENT, listener);
    },

    /**
     * Execute store updates in a batch as a single update.
     * @param {Function} updater function which contains store updates
     */
    inBatch (updater) {
      if (batchUpates) { // if updates are already batched then just execute updater
        updater();
        return;
      }
      batchUpates = true;
      updateHappened = false;

      updater();

      batchUpates = false;
      if (updateHappened) {
        bus.publish(UPDATE_EVENT);
      }
    }
  };

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

  forEach(config, (initialValue, name) => setProperty(name, initialValue));

  return Object.freeze(Object.create(storeProps));
}
