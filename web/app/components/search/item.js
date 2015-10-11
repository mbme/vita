import {createReactComponent, bus} from 'viter/viter';
import Category from 'components/common/category';
import moment from 'moment';

export default createReactComponent({
  displayName: 'SearchItem',

  render () {
    let {note} = this.props;
    let date = moment(note.timestamp * 1000).fromNow();
    return (
      <li className="SearchItem" onClick={() => bus.publish('note:open', note.id)}>
        <span className="name">{note.name}</span>
        <time>{date}</time>
        &nbsp;|&nbsp;
        {note.categories.map(cat => <Category key={cat} name={cat} />)}
      </li>
    )
  }
})
