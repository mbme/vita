import createUrlManager from 'managers/url-manager';

describe('Url Manager', function () {
  it('should update url', function () {
    let spy = sinon.spy();
    let updater = createUrlManager(spy);

    let notes = [];
    updater({ notes });

    expect(spy.calledOnce).to.be.true;

    updater({ notes });

    expect(spy.calledOnce).to.be.true;
  });
});
