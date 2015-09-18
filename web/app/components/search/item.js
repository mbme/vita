import React from 'react';

export default class SearchItem extends React.Component {
  static propTypes = {
    note: React.PropTypes.object.isRequired
  }
  render () {
    let {note} = this.props;
    return (
      <li className="SearchItem">
        <h1>{note.name}</h1>
        {note.categories.map(cat => <span key={cat} className="category">{cat}</span>)}
      </li>
    )
  }
}
