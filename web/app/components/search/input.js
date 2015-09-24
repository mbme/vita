import {createReactComponent} from 'viter/viter';

import {debounce} from 'lodash';
import {searchDelay} from 'config';
import {bus} from 'viter/viter';

export default createReactComponent({
  displayName: 'SearchInput',

  shouldComponentUpdate () {
    return false;
  },

  render () {
    let {filter} = this.props;
    return (
      <input type="text" className="SearchInput"
             placeholder="Search" defaultValue={filter} onChange={this.handleChange} />
    )
  },

  handleChange (e) {
    this.dispatchFilterUpdate(e.target.value);
  },

  dispatchFilterUpdate:  debounce(function (filter) {
    bus.publish('search:filter-changed', filter);
  }, searchDelay)
})
