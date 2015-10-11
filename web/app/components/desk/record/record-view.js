import {partial} from 'lodash';
import {createReactComponent, bus} from 'viter/viter';

import Note from 'components/desk/note';
import Icon from 'components/common/icon';
import Record from './record';

export default createReactComponent({
  displayName: 'RecordView',

  render () {
    let {id, name, data, categories} = this.props.note;

    let menu = [{
      icon: 'compose',
      handler: partial(this.editNote, true)
    }];

    return (
      <Note id={id} className="RecordView" menu={menu}>
        <Record name={name} data={data} categories={categories} />
      </Note>
    )
  },

  editNote (edit) {
    bus.publish('note:edit', this.props.note.id, edit);
  }
})
