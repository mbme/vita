import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import createStore from 'viter/store';
import {
  createReactComponent,
  createReactContainer,
  createComponent,
  setStore,
} from 'viter/viter';

describe('Viter', function () {
  it('should create React components', function () {
    let comp = createReactComponent({
      displayName: 'Test',

      render () {
        return 'OK';
      },
    });

    let el = React.createElement(comp);

    expect(ReactTestUtils.isElement(el)).to.be.true;
  });


  it('should subscribe React containers to store updates', function () {
    let store = createStore({ test: 'a' });
    setStore(store);

    let comp = createReactContainer({
      displayName: 'Test',

      getState ({ test }) {
        return { test };
      },

      render () {
        return 'OK';
      },
    });

    let wrapper = Enzyme.shallow(React.createElement(comp));
    expect(wrapper.state('test')).to.equal(store.test);

    store.test = 'some data';
    expect(wrapper.state('test')).to.equal(store.test);

    wrapper.instance().componentWillUnmount();
  });

  it('should create components', function () {
    createComponent({
      getState () {
      },

      render () {
      },
    });
  });

  it('should subscribe components to store updates', function () {
    let store = createStore({ test: 'a' });
    setStore(store);

    let handler = sinon.spy();
    let comp = createComponent({
      getState ({ test }) {
        return { test };
      },

      render: handler,
    });

    comp.init();

    store.test = 'some data';

    expect(handler.calledOnce).to.be.true;

    comp.destroy();
  });
});
