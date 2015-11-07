import {partial} from 'lodash';
import {createReactComponent, bus} from 'viter/viter';

import Note from 'components/desk/note';
import Record from './record';

function editNote (id, edit) {
  bus.publish('note:edit', id, edit);
}

function closeNote (id) {
  bus.publish('note:close', id);
}

export default createReactComponent(function RecordView ({note, shouldScroll}) {
  let menu = [{
    icon: 'compose',
    handler: partial(editNote, note.id, true)
  }];

  return (
    <Note id={note.id} className="RecordView"
          shouldScroll={shouldScroll}
          menu={menu}
          onClose={partial(closeNote, note.id)}>
      <Record note={note} />
    </Note>
  )
})
