import React from 'react';
import SearchItem from './item';

export default class SearchItems extends React.Component {
  static propTypes = {
    results: React.PropTypes.array.isRequired
  }

  render () {
    let {results} = this.props;

    return (
      <ul className="SearchItems">
        {results.map(info => <SearchItem key={info.id} note={info}/>)}
      </ul>
    )
  }
}
