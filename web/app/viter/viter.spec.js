import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {
  createReactComponent,
  createReactContainer,
  createComponent
} from 'viter/viter';

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

  it('should not create React containers without required fields', function () {
    expect(function () {
      createReactContainer({
        displayName: 'test',

        render () {
          return 'OK';
        }
      });
    }).to.throw();

    expect(function () {
      createReactContainer({
        render () {
          return 'OK';
        },

        getState () {
          return {};
        }
      });
    }).to.throw();

    expect(function () {
      createReactContainer({
        displayName: 'test',

        getState () {
          return {};
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

  it('should create components', function () {
    createComponent({
      getState () {
      },

      render () {
      }
    });
  });

  it('should not create components without required fields', function () {
    expect(function () {
      createComponent({
        render () {
          return 'OK';
        }
      });
    }).to.throw();

    expect(function () {
      createComponent({
        getState () {
          return {};
        }
      });
    }).to.throw();
  });

  it('should subscribe components to store updates', function () {
    initStore({ test: 'a' });

    let handler = sinon.spy();
    let comp = createComponent({
      getState ({ test }) {
        return { test };
      },

      render: handler
    });

    comp.init();

    STORE.test = 'some data';

    expect(handler.calledOnce).to.be.true;

    comp.destroy();
  });
});
