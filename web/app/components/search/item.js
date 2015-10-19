import {createReactComponent, bus} from 'viter/viter';
import cx from 'classnames';

import Category from 'components/common/category';
import TimeAgo from 'components/common/time-ago';

export default createReactComponent(function SearchItem ({note}) {
  let {id, selected, name, categories, timestamp} = note;
  return (
    <li className={cx("SearchItem", {'is-selected': selected})}
        onClick={() => bus.publish('note:open', id)}>
      <span className="name">{name}</span>
      <TimeAgo timestamp={timestamp}/>
      &nbsp;|&nbsp;
      {categories.map(cat => <Category key={cat} name={cat} />)}
    </li>
  )
})
