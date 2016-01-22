import { createReactComponent, bus } from 'viter/viter';
import { openNote } from 'actions/notes-actions';
import cx from 'classnames';

import Category from 'components/common/category';
import TimeAgo from 'components/common/time-ago';

export default createReactComponent({
  displayName: 'SearchItem',

  render () {
    let note = this.props.note;
    let { selected, name, categories, timestamp } = note;
    return (
      <li className={cx('SearchItem', { 'is-selected': selected })} onClick={this.onClick}>
        <span className="name">{name}</span>
        <TimeAgo timestamp={timestamp}/>
        &nbsp;|&nbsp;
        {categories.map(cat => <Category key={cat} name={cat} />)}
      </li>
    );
  },

  onClick () {
    let note = this.props.note;
    if (note.selected) {
      bus.publish('note:focus', note.id);
    } else {
      openNote(note.id);
    }
  }
});
