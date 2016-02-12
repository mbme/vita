import { createReactComponent } from 'viter/viter';
import { createConfirmationDialog } from 'helpers/dialogs';

import { Tab, Tabs } from 'components/common/tabs';
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
  deleteFile,
  closeNote,
  editNote,
  deleteNote
} from 'controllers/notes-controller';

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
    let { name, data, categories } = this.props.note;
    return { name, data, categories };
  },

  render () {
    let { note } = this.props;

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
      }, {
        icon: 'trash-a',
        type: 'warn',
        handler: this.onDelete
      });
    }

    let { name, data, categories } = this.state;

    let completions = note.attachments.map(function (attachment) {
      return {
        type:  'attachment',
        value: `!${attachment.name}!`,
        text: `${attachment.name} [${attachment.type}]`
      };
    }).toJS();
    return (
      <Note id={note.id} className="RecordEditorView"
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
                    completions={completions}
                    placeholder="Drop few lines..."
                    ref="editor"/>
          </Tab>

          <Tab label="Preview" className="RecordEditorView-preview">
            <Record name={name}
                    data={data}
                    categories={categories}
                    attachments={note.attachments}/>
          </Tab>

          <Tab label="Attachments" className="RecordEditorView-attachments">
            <FilePicker onFileSelected={this.uploadFile}/>
            <Attachments attachments={note.attachments}
                         deleteAttachment={this.deleteAttachment}/>
          </Tab>
        </Tabs>

      </Note>
    );
  },

  uploadFile (file) {
    attachFile(this.props.note.nId, file);
  },

  deleteAttachment (attachment) {
    deleteFile(this.props.note.nId, attachment.name);
  },

  getCurrentState () {
    let { name, categories, editor } = this.refs;

    return {
      name:       name.value,
      categories: categories.value,
      data:       editor.value
    };
  },

  onBeforeTabChange (newTab, currentTab) {
    // do not update when switching from preview
    if (currentTab !== 1) {
      let { name, data, categories } = this.getCurrentState();
      this.setState({ name, data, categories });
    }
  },

  saveNote () {
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

    if (note.isNew()) {
      return createNote(note.nId, changed);
    }

    return saveNote(note.nId, changed);
  },

  onSave () {
    this.saveNote().then(() => editNote(this.props.note.nId, false));
  },

  onUndo () {
    showCloseConfirmation().then(() => editNote(this.props.note.nId, false));
  },

  close () {
    closeNote(this.props.note.nId);
  },

  onDelete () {
    showDeleteConfirmation().then(() => deleteNote(this.props.note.nId));
  }
});
