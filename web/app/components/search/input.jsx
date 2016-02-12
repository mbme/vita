import { createReactComponent } from 'viter/viter';
import { updateFilter } from 'controllers/app-controller';
import Icon from 'components/icon';

import { debounce } from 'lodash';
import { searchDelay } from 'config';

const dispatchFilterUpdate = debounce(updateFilter, searchDelay);

export default createReactComponent({
  displayName: 'SearchInput',

  shouldComponentUpdate () {
    return false;
  },

  render () {
    let { filter } = this.props;
    return (
      <div className="SearchInput">
        <Icon type="ios-search-strong"/>
        <input type="text"
               placeholder="Search"
               defaultValue={filter}
               onChange={this.handleChange} />
      </div>
    );
  },

  handleChange (e) {
    dispatchFilterUpdate(e.target.value);
  }
});
