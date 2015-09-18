import React from 'react';
import moment from 'moment';

export default class SearchItem extends React.Component {
  static propTypes = {
    note: React.PropTypes.object.isRequired
  }
  render () {
    let {note} = this.props;
    let date = moment(note.timestamp * 1000).fromNow();
    return (
      <li className="SearchItem">
        <span className="name">{note.name}</span>
        <time>{date}</time>
        {note.categories.map(cat => <span key={cat} className="category">{cat}</span>)}
      </li>
    )
  }
}
