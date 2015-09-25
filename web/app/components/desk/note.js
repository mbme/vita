import {createReactComponent} from 'viter/viter';

export default createReactComponent({
  displayName: 'Note',

  render () {
    let {note} = this.props;
    return (
      <li className="Note">
        <h1>{note.name}</h1>
        <h4>{note.categories.join(', ')}</h4>
        <div className="body">{note.data}</div>
      </li>
    )
  }
})
