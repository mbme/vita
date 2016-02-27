import { createReactContainer } from 'viter/viter';
import { createConfirmationModal } from 'components/modal';
import { createDeferred } from 'helpers/utils';

import Tabs from 'components/tabs';
import Editor from 'components/editor';
import CategoriesEditor from 'components/categories-editor';

import AttachmentsTab from './tab-attachments';

import Note from 'components/desk/note';
import Record from 'components/desk/record/record';

function closeConfirmation (deferred) {
  return createConfirmationModal({
    type: 'warn',
    title: 'Close note editor',
    body: 'Close note editor without saving changes?',
    confirmationButton: 'Close',
    onSuccess: deferred.resolve,
    onCancel: deferred.reject,
  });
}

function deleteConfirmation (deferred) {
  return createConfirmationModal({
    type: 'warn',
    title: 'Delete note',
    body: 'Are you sure you would like to delete this note?',
    confirmationButton: 'Delete',
    onSuccess: deferred.resolve,
    onCancel: deferred.reject,
  });
}

export default createReactContainer({
  displayName: 'RecordEditorView',

  getInitialState () {
    let { name, data, categories } = this.props.note;
    return { name, data, categories };
  },

  getCurrentState () {
    let { name, categories, editor } = this.refs;

    return {
      name:       name.value,
      categories: categories.value,
      data:       editor.value,
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
      return this.actions.createNote(note.nId, changed);
    }

    return this.actions.saveNote(note.nId, changed);
  },

  onSave () {
    this.saveNote().then(() => this.actions.editNote(this.props.note.nId, false));
  },

  showModal (createModal) {
    let deferred = createDeferred();

    deferred.promise.catch(() => this.setState({ modal: null }));

    let modal = createModal(deferred);

    this.setState({ modal });

    return deferred.promise;
  },

  onUndo () {
    this.showModal(closeConfirmation).then(
      () => this.actions.editNote(this.props.note.nId, false)
    );
  },

  onClose () {
    this.showModal(closeConfirmation).then(
      () => this.actions.closeNote(this.props.note.nId)
    );
  },

  onDelete () {
    this.showModal(deleteConfirmation).then(
      () => this.actions.deleteNote(this.props.note.nId)
    );
  },

  renderEditorTab () {
    let { note } = this.props;

    let completions = note.attachments.map(function (attachment) {
      return {
        type:  'attachment',
        value: `!${attachment.name}!`,
        text: `${attachment.name} [${attachment.type}]`,
      };
    }).toJS();

    return (
      <div className="Edit" label="Edit">
        <input type="text" className="name"
               defaultValue={note.name} placeholder="Name" ref="name" />
        <CategoriesEditor defaultValue={note.categories}
                          placeholder="Categories"
                          ref="categories" />
        <Editor defaultValue={note.data}
                completions={completions}
                placeholder="Drop few lines..."
                ref="editor" />
      </div>
    );
  },

  renderPreviewTab () {
    let { name, data, categories } = this.state;
    let { attachments } = this.props.note;

    return (
      <div label="Preview">
        <Record name={name}
                data={data}
                categories={categories}
                attachments={attachments} />
      </div>
    );
  },

  render () {
    let { note } = this.props;
    let { modal } = this.state;

    let menu = [{
      icon: 'checkmark-round',
      handler: this.onSave,
    }];

    // if new record then do not show delete button
    if (!note.isNew()) {
      menu.push({
        icon: 'arrow-return-left',
        type: 'warn',
        handler: this.onUndo,
      }, {
        icon: 'trash-a',
        type: 'warn',
        handler: this.onDelete,
      });
    }

    return (
      <Note id={note.id} className="RecordEditorView"
            menu={menu}
            onClose={this.onClose}>

        {modal}

        <Tabs onBeforeChange={this.onBeforeTabChange}>
          {this.renderEditorTab()}
          {this.renderPreviewTab()}
          <AttachmentsTab label="Attachments" note={note} />
        </Tabs>

      </Note>
    );
  },
});
