import {createReactComponent, bus} from 'viter/viter';
import Category from 'components/common/category';
import moment from 'moment';
import cx from 'classnames';

export default createReactComponent(function SearchItem ({note}) {
  let date = moment(note.timestamp * 1000).fromNow();
  let {id, selected, name, categories} = note.toJS();
  return (
    <li className={cx("SearchItem", {'is-selected': selected})}
        onClick={() => bus.publish('note:open', id)}>
      <span className="name">{name}</span>
      <time>{date}</time>
      &nbsp;|&nbsp;
      {categories.map(cat => <Category key={cat} name={cat} />)}
    </li>
  )
})
