import { createReactComponent } from 'viter/viter';
import Icon from 'components/icon';

export default createReactComponent({
  displayName: 'SearchInput',

  shouldComponentUpdate () {
    return false;
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

  handleChange (e) {
    this.props.onChange(e.target.value);
  },
});
