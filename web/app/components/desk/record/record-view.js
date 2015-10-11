import {partial} from 'lodash';
import {createReactComponent, bus} from 'viter/viter';

import Note from 'components/desk/note';
import Icon from 'components/common/icon';
import Record from './record';

export default createReactComponent({
  displayName: 'RecordView',

  render () {
    let {id, name, data, categories} = this.props.note;

    return (
      <Note id={id} className="RecordView">
        <Icon type="compose" onClick={partial(this.editNote, true)}/>
        <Record name={name} data={data} categories={categories} />
      </Note>
    )
  },

  editNote (edit) {
    bus.publish('note:edit', this.props.note.id, edit);
  }
})
