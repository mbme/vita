import {createReactComponent, bus} from 'viter/viter';
import Category from 'components/common/category';
import moment from 'moment';
import cx from 'classnames';

export default createReactComponent(function SearchItem ({note}) {
  let date = moment(note.timestamp * 1000).fromNow();
  return (
    <li className={cx("SearchItem", {'is-selected': note.selected})}
        onClick={() => bus.publish('note:open', note.id)}>
      <span className="name">{note.name}</span>
      <time>{date}</time>
      &nbsp;|&nbsp;
      {note.categories.map(cat => <Category key={cat} name={cat} />)}
    </li>
  )
})
