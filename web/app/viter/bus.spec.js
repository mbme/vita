import EventBus from 'viter/bus';

const badEvents = [null, undefined, 1, {}, true, '', function () {}];
const badHandlers = [null, undefined, 1, {}, true, '', 'sfasdf'];

describe('EventBus', function () {
  it('should trigger only subscribed handlers', function () {
    let bus = new EventBus();

    let handler = sinon.spy();
    bus.subscribe('test', handler);

    bus.publish('test');
    bus.publish('test1');

    expect(handler.calledOnce).to.be.true;
  });

  it('should pass event parameters to handlers', function () {
    let bus = new EventBus();

    let handler = sinon.spy();
    bus.subscribe('test', handler);

    let x = {};
    let y = 7;

    bus.publish('test', x, y);

    expect(handler.calledWith(x, y)).to.be.true;
  });

  it('should fail if triggering non-string or empty event', function () {
    let bus = new EventBus();

    let handler = sinon.spy();
    bus.subscribe('test', handler);

    badEvents.forEach(function (badValue) {
      expect(function () {
        bus.publish(badValue);
      }).to.throw();
    });

    expect(handler.called).to.be.false;
  });

  it('should fail if subscribing for non-string or empty event', function () {
    let bus = new EventBus();

    let handler = sinon.spy();

    badEvents.forEach(function (badValue) {
      expect(function () {
        bus.subscribe(badValue, handler);
      }).to.throw();
    });
  });

  it('should fail if subscribing with handler which is not a function', function () {
    let bus = new EventBus();

    badHandlers.forEach(function (badHandler) {
      expect(function () {
        bus.subscribe('test', badHandler);
      }).to.throw();
    });
  });

  it('should execute handler in proper context', function () {
    let bus = new EventBus();

    let handler = sinon.spy();
    let context = {};
    bus.subscribe('test', handler, context);

    bus.publish('test');

    expect(handler.calledOn(context)).to.be.true;
  });

  it('should unsubscribe handlers', function () {
    let bus = new EventBus();

    let handler = sinon.spy();
    bus.subscribe('test', handler);

    let handler1 = sinon.spy();
    bus.subscribe('test', handler1);

    bus.publish('test');

    bus.unsubscribe('test', handler);

    bus.publish('test');

    expect(handler.calledOnce).to.be.true;
    expect(handler1.calledTwice).to.be.true;
  });

  it('should fail if unsubscribing handler which is not a function', function () {
    let bus = new EventBus();

    badHandlers.forEach(function (badHandler) {
      expect(function () {
        bus.unsubscribe('test', badHandler);
      }).to.throw();
    });
  });

  it('should not fail if unsubscribing unknown handler', function () {
    let bus = new EventBus();

    expect(function () {
      bus.unsubscribe('test', function () {});
    }).not.to.throw();
  });
});
