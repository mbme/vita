import { forEach } from 'lodash';
import createStore from 'viter/store';

describe('Store', function () {
  it('should be properly initialized', function () {
    let defaults = {
      a: 0,
      b: 'str',
      c: null,
      d: false,
      e: {}
    };
    let store = createStore(defaults);

    forEach(defaults, function (value, name) {
      expect(store).to.have.property(name, value);
    });
  });

  it('should not allow to set properties which were not initialized', function () {
    let store = createStore({ a: 1 });
    expect(function () {
      store.b = 2;
    }).to.throw();
  });

  it('should allow to subscribe and unsubscribe for updates', function () {
    let store = createStore({ a: 1 });

    let handler = sinon.spy();
    store.addListener(handler);

    store.a = 2;

    store.removeListener(handler);

    store.a = 3;

    expect(handler.calledOnce).to.be.true;
  });

  it('should trigger handlers only if value changes', function () {
    let store = createStore({ a: 1 });

    let handler = sinon.spy();
    store.addListener(handler);

    store.a = 2;
    store.a = 2;

    expect(handler.calledOnce).to.be.true;
  });

  it('should allow to batch store updates', function () {
    let store = createStore({ a: 1, b: 2 });

    let handler = sinon.spy();
    store.addListener(handler);

    store.inBatch(function () {
      store.a = 3;
      store.b = 4;
    });

    expect(handler.calledOnce).to.be.true;
  });

  it('should trigger handlers after batched update only if store was updated', function () {
    let store = createStore({ a: 1, b: 2 });

    let handler = sinon.spy();
    store.addListener(handler);

    store.inBatch(function () {
      store.a = 1;
      store.b = 2;
    });

    expect(handler.called).to.be.false;
  });

  it('should handle batch in a batch', function () {
    let store = createStore({ a: 1, b: 2 });

    let handler = sinon.spy();
    store.addListener(handler);

    store.inBatch(function () {
      store.a = 3;
      store.b = 4;

      store.inBatch(function () {
        store.a = 5;
        store.b = 6;
      });
    });

    expect(handler.calledOnce).to.be.true;
  });
});
