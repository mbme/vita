import { partial } from 'lodash';
import { createReactComponent } from 'viter/viter';

import { editNote, closeNote } from 'controllers/notes-controller';

import Note from 'components/desk/note';
import Record from './record';

export default createReactComponent(function RecordView ({ note, shouldScroll }) {
  let menu = [{
    icon: 'compose',
    handler: partial(editNote, note.nId, true)
  }];

  return (
    <Note id={note.id} className="RecordView"
          shouldScroll={shouldScroll}
          menu={menu}
          onClose={partial(closeNote, note.nId)}>
      <Record name={note.name}
              categories={note.categories}
              data={note.data}
              attachments={note.attachments} />
    </Note>
  );
});
