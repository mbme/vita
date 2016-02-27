import Icon from 'components/icon';

describe('Component Icon', function () {
  it('should render icon', function () {
    let wrapper = Enzyme.shallow(<Icon type="test" />);
    expect(wrapper.find('.ion-test')).to.have.length(1);
    expect(wrapper.find('.Icon')).to.have.length(1);
  });

  it('should set className', function () {
    let wrapper = Enzyme.shallow(<Icon type="test" className="one-more-test" />);
    expect(wrapper.find('.one-more-test')).to.have.length(1);
  });

  it('should handle clicks', function () {
    let onClick = sinon.spy();
    let wrapper = Enzyme.shallow(<Icon type="test" onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });
});
