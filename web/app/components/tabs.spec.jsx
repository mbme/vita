import Tabs from 'components/tabs';

describe('Component Tabs', function () {
  function createTabs (onBeforeChange) {
    return (
      <Tabs onBeforeChange={onBeforeChange}>
        <div label="tab1">tab1</div>
        <div label="tab2">tab2</div>
        <div label="tab3">tab3</div>
      </Tabs>
    );
  }

  function getHeaders (wrapper) {
    return wrapper.find('.Tabs').find('li');
  }

  function getTabs (wrapper) {
    return wrapper.find('.Tab');
  }

  it('should render tabs', function () {
    let wrapper = Enzyme.shallow(createTabs());

    let headers = getHeaders(wrapper);
    expect(headers).to.have.length(3);

    let tabs = getTabs(wrapper);
    expect(tabs).to.have.length(3);

    // should select first tab by default
    expect(headers.find('.is-selected').text()).to.equal('tab1');
    expect(tabs.find('.is-selected').text()).to.equal('tab1');
  });

  it("should fail if child element(tab) doesn't have 'label' property", function () {
    expect(function () {
      Enzyme.shallow(
        <Tabs>
          <div label="tab1">tab data 1</div>
          <div>tab data 2</div>
        </Tabs>
      );
    }).to.throw();
  });

  it('should allow to switch tabs', function () {
    let wrapper = Enzyme.shallow(createTabs());

    getHeaders(wrapper).forEach(function (header) {
      header.simulate('click');

      let tabs = getTabs(wrapper);
      let headers = getHeaders(wrapper);
      expect(headers.find('.is-selected').text()).to.equal(tabs.find('.is-selected').text());
    });

  });

  it('should run a hook before switching tabs', function () {
    let onBeforeChange = sinon.spy();
    let wrapper = Enzyme.shallow(createTabs(onBeforeChange));

    let headers = getHeaders(wrapper);
    headers.forEach(header => header.simulate('click'));

    expect(onBeforeChange.callCount).to.equal(headers.length - 1);
  });
});
