import { createReactComponent, connectReactComponent } from 'viter/viter';

import Note from 'components/desk/note';
import Record from './record';

const RecordView = createReactComponent({
  displayName: 'RecordView',

  onEdit () {
    this.props.editNote(this.props.note.nId, true);
  },

  onClose () {
    this.props.closeNote(this.props.note.nId);
  },

  render () {
    let { note } = this.props;

    let menu = [{
      icon: 'compose',
      handler: this.onEdit,
    }];

    return (
      <Note id={note.id} className="RecordView"
            menu={menu}
            onClose={this.onClose}>
        <Record name={note.name}
                categories={note.categories}
                data={note.data}
                attachments={note.attachments} />
      </Note>
    );
  },
});

export default connectReactComponent(RecordView, {
  actions: ['editNote', 'closeNote'],
});
