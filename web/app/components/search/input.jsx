import { createReactComponent, PropTypes } from 'viter/viter';
import Icon from 'components/icon';

export default createReactComponent({
  displayName: 'SearchInput',

  propTypes: {
    filter:   PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  },

  shouldComponentUpdate () {
    return false;
  },

  handleChange (e) {
    this.props.onChange(e.target.value);
  },

  render () {
    let { filter } = this.props;
    return (
      <div className="SearchInput">
        <Icon type="ios-search-strong" />
        <input type="text"
               placeholder="Search"
               defaultValue={filter}
               onChange={this.handleChange} />
      </div>
    );
  },
});
