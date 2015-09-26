import {createReactComponent} from 'viter/viter';

import moment from 'moment';
import {bus} from 'viter/viter';

export default createReactComponent({
  displayName: 'SearchItem',

  render () {
    let {note} = this.props;
    let date = moment(note.timestamp * 1000).fromNow();
    return (
      <li className="SearchItem" onClick={() => bus.publish('note:open', note.id)}>
        <span className="name">{note.name}</span>
        <time>{date}</time>
        {note.categories.map(cat => <span key={cat} className="category">{cat}</span>)}
      </li>
    )
  }
})
