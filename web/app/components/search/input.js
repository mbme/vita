import React from 'react';
import {debounce} from 'lodash';
import {searchDelay} from 'config';
import {bus} from 'viter/viter';

export default class SearchItem extends React.Component {
  static propTypes = {
    filter: React.PropTypes.string.isRequired
  }

  shouldComponentUpdate () {
    return false;
  }

  render () {
    let {filter} = this.props;
    return (
      <input type="text" className="SearchInput"
             placeholder="Search" defaultValue={filter} onChange={::this.handleChange} />
    )
  }

  handleChange (e) {
    this.dispatchFilterUpdate(e.target.value);
  }

  dispatchFilterUpdate = debounce(function (filter) {
    bus.publish('search:filter-changed', filter);
  }, searchDelay)
}
