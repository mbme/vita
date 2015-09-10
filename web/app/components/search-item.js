import React from 'react';

export default class SearchItem extends React.Component {
  static propTypes = {
    note: React.PropTypes.object.isRequired
  }
  render () {
    return (
      <li className="SearchItem">
        <h3>{this.props.note.name}</h3>
        {this.props.note.categories.map(cat => <span key={cat} className="tag">{cat}</span>)}
      </li>
    )
  }
}
