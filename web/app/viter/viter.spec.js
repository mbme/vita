import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import createStore from 'viter/store';
import {
  createReactComponent,
  createComponent,
  connectReactComponent,
  setStore,
} from 'viter/viter';

describe('Viter', function () {
  describe('createReactComponent', function () {
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
  });

  describe('connectReactComponent', function () {
    it('should subscribe React containers to store updates', function () {
      let store = createStore({ test: 'a' });
      setStore(store);

      let comp = createReactComponent({
        displayName: 'Test',

        render () {
          return React.createElement('div', null, this.props.test);
        },
      });

      let container = connectReactComponent(comp, {
        store: 'test',
      });

      let wrapper = Enzyme.shallow(React.createElement(container));
      expect(wrapper.prop('test')).to.equal(store.test);

      store.test = 'some data';
      wrapper.update();
      expect(wrapper.prop('test')).to.equal(store.test);

      wrapper.instance().componentWillUnmount();
    });
  });


  describe('createComponent', function () {
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
});
