import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { createReactComponent, createReactContainer } from 'viter/viter';

import { STORE, initStore } from 'viter/store';

describe('Viter', function () {
  it('should create React components', function () {
    let comp = createReactComponent({
      displayName: 'Test',

      render () {
        return 'OK';
      }
    });

    let el = React.createElement(comp);

    expect(ReactTestUtils.isElement(el)).to.be.true;
  });


  it('should not create React components without required fields', function () {
    expect(function () {
      createReactComponent({
        displayName: 'Test'
      });
    }).to.throw();

    expect(function () {
      createReactComponent({
        render () {
          return 'OK';
        }
      });
    }).to.throw();
  });

  it('should create React containers', function () {
    let comp = createReactContainer({
      displayName: 'Test',

      getState () {
        return {};
      },

      render () {
        return 'OK';
      }
    });

    let el = React.createElement(comp);

    expect(ReactTestUtils.isElement(el)).to.be.true;
  });

  it('should not create React containers without "getState" method', function () {
    expect(function () {
      createReactContainer({
        displayName: 'test',

        render () {
          return 'OK';
        }
      });
    }).to.throw();
  });

  it('should subscribe React containers to store updates', function () {
    initStore({ test: 'a' });

    let comp = createReactContainer({
      displayName: 'Test',

      getState ({ test }) {
        return { test };
      },

      render () {
        return 'OK';
      }
    });

    let wrapper = Enzyme.shallow(React.createElement(comp));
    expect(wrapper.state('test')).to.equal(STORE.test);

    STORE.test = 'some data';
    expect(wrapper.state('test')).to.equal(STORE.test);

    wrapper.instance().componentWillUnmount();
  });
});
