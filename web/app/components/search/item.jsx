import { createReactComponent, bus } from 'viter/viter';
import { openNote } from 'controllers/notes-controller';
import cx from 'classnames';

import Category from 'components/category';
import TimeAgo from 'components/time-ago';

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

    // if note is already open then just focus it
    if (note.selected) {
      bus.publish('note:focus', note.id);
    } else {
      // else open and focus
      openNote(note.id).then(function () {
        bus.publish('note:focus', note.id);
      });
    }
  }
});
