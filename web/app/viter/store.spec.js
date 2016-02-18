import { forEach } from 'lodash';
import {
  STORE,
  initStore,
  addStoreListener,
  removeStoreListener,
  inBatch
} from 'viter/store';

describe('Store', function () {
  it('should be properly initialized', function () {
    let defaults = {
      a: 0,
      b: 'str',
      c: null,
      d: false,
      e: {}
    };
    initStore(defaults);

    forEach(defaults, function (value, name) {
      expect(STORE).to.have.property(name, value);
    });
  });

  it('should clear previous values on new initialization', function () {
    initStore({ a: 1 });
    initStore({ b: 2 });
    expect(STORE).to.not.have.property('a');
    expect(STORE).to.have.property('b', 2);
  });

  it('should not allow to set properties which were not initialized', function () {
    initStore({ a: 1 });
    expect(function () {
      STORE.b = 2;
    }).to.throw();
  });

  it('should allow to subscribe and unsubscribe for updates', function () {
    initStore({ a: 1 });

    let handler = sinon.spy();
    addStoreListener(handler);

    STORE.a = 2;

    removeStoreListener(handler);

    STORE.a = 3;

    expect(handler.calledOnce).to.be.true;
  });

  it('should trigger handlers only if value changes', function () {
    initStore({ a: 1 });

    let handler = sinon.spy();
    addStoreListener(handler);

    STORE.a = 2;
    STORE.a = 2;

    removeStoreListener(handler);

    expect(handler.calledOnce).to.be.true;
  });

  it('should trigger handlers on store initialization', function () {
    let handler = sinon.spy();
    addStoreListener(handler);

    initStore({ a: 1 });

    removeStoreListener(handler);

    expect(handler.calledOnce).to.be.true;
  });

  it('should allow to batch store updates', function () {
    initStore({ a: 1, b: 2 });

    let handler = sinon.spy();
    addStoreListener(handler);

    inBatch(function () {
      STORE.a = 3;
      STORE.b = 4;
    });

    removeStoreListener(handler);

    expect(handler.calledOnce).to.be.true;
  });

  it('should trigger handlers after batched update only if store was updated', function () {
    initStore({ a: 1, b: 2 });

    let handler = sinon.spy();
    addStoreListener(handler);

    inBatch(function () {
      STORE.a = 1;
      STORE.b = 2;
    });

    removeStoreListener(handler);

    expect(handler.called).to.be.false;
  });

  it('should handle batch in a batch', function () {
    initStore({ a: 1, b: 2 });

    let handler = sinon.spy();
    addStoreListener(handler);

    inBatch(function () {
      STORE.a = 3;
      STORE.b = 4;

      inBatch(function () {
        STORE.a = 5;
        STORE.b = 6;
      });
    });

    removeStoreListener(handler);

    expect(handler.calledOnce).to.be.true;
  });
});
