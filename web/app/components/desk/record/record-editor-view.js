import {createReactComponent, bus} from 'viter/viter';
import {createConfirmationDialog} from 'helpers/dialogs';

import {Tab, Tabs} from 'components/common/tabs';
import Editor from 'components/common/editor';
import CategoriesEditor from 'components/common/categories-editor';
import Attachments from './attachments';
import FilePicker from './file-picker';

import Note from 'components/desk/note';
import Record from 'components/desk/record/record';

import {
  createNote,
  saveNote,
  attachFile,
  deleteFile
} from 'actions/notes-actions';

function showCloseConfirmation () {
  return createConfirmationDialog({
    type: 'warn',
    title: 'Close note editor',
    body: 'Close note editor without saving changes?',
    confirmationButton: 'Close'
  });
}

function showDeleteConfirmation () {
  return createConfirmationDialog({
    type: 'warn',
    title: 'Delete note',
    body: 'Are you sure you would like to delete this note?',
    confirmationButton: 'Delete'
  });
}

export default createReactComponent({
  displayName: 'RecordEditorView',

  getInitialState () {
    return {
      note: this.props.note
    };
  },

  render () {
    let {note} = this.state;
    let {shouldScroll} = this.props;

    let menu = [{
      icon: 'checkmark-round',
      handler: this.onSave
    }];

    // if new record then do not show delete button
    if (!note.isNew()) {
      menu.push({
        icon: 'arrow-return-left',
        type: 'warn',
        handler: this.onUndo
      },{
        icon: 'trash-a',
        type: 'warn',
        handler: this.onDelete
      });
    }

    return (
      <Note id={note.id} className="RecordEditorView"
            shouldScroll={shouldScroll}
            menu={menu}
            onBeforeClose={showCloseConfirmation} onClose={this.close}>

        <Tabs onBeforeChange={this.onBeforeTabChange}>

          <Tab label="Edit" className="RecordEditorView-edit">
            <input type="text" className="name"
                   defaultValue={note.name} placeholder="Name" ref="name"/>
            <CategoriesEditor defaultValue={note.categories}
                              placeholder="Categories"
                              ref="categories"/>
            <Editor defaultValue={note.data}
                    placeholder="Drop few lines..."
                    ref="editor"/>
          </Tab>

          <Tab label="Preview" className="RecordEditorView-preview">
            <Record note={note}/>
          </Tab>

          <Tab label="Attachments" className="RecordEditorView-attachments">
            <FilePicker onFileSelected={this.uploadFile}/>
            <Attachments noteKey={note.key}
                         attachments={note.attachments}
                         deleteAttachment={this.deleteAttachment}/>
          </Tab>
        </Tabs>

      </Note>
    )
  },

  uploadFile (file) {
    attachFile(this.state.note.nId, file);
  },

  deleteAttachment (attachment) {
    deleteFile(this.state.note.id, attachment.name);
  },

  getCurrentState () {
    let {name, categories, editor} = this.refs;

    return {
      name:       name.value,
      categories: categories.value,
      data:       editor.value
    };
  },

  getChanged () {
    let note = this.props.note;

    let current = this.getCurrentState();

    let changed = {};

    if (note.name !== current.name) {
      changed.name = current.name;
    }

    if (!note.categories.equals(current.categories)) {
      changed.categories = current.categories;
    }

    if (note.data !== current.data) {
      changed.data = current.data;
    }

    return changed;
  },

  onBeforeTabChange (newTab, currentTab) {
    // do not update when switching from preview
    if (currentTab !== 1) {
      let note = this.state.note.merge(this.getCurrentState());
      this.setState({note});
    }
  },

  saveNote () {
    let note = this.props.note;
    let changed = this.getChanged();

    if (note.isNew()) {
      return createNote(note.nId, changed);
    } else {
      return saveNote(note.id, changed);
    }
  },

  onSave () {
    this.saveNote().then(this.close);
  },

  onUndo () {
    showCloseConfirmation().then(() => bus.publish('note:edit', this.props.note.id, false));
  },

  close () {
    let note = this.props.note;
    if (note.isNew()) {
      bus.publish('note:close-by-nId', note.nId);
    } else {
      bus.publish('note:close', note.id);
    }
  },

  onDelete () {
    showDeleteConfirmation().then(() => bus.publish('note:delete', this.props.note.id));
  }
});
