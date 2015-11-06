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
  let {id, name, data, categories} = note;

  let menu = [{
    icon: 'compose',
    handler: partial(editNote, id, true)
  }];

  return (
    <Note id={id} className="RecordView"
          shouldScroll={shouldScroll}
          menu={menu}
          onClose={partial(closeNote, id)}>
      <Record name={name} data={data} categories={categories} />
    </Note>
  )
})
