import {createReactComponent, bus} from 'viter/viter';
import {createConfirmationDialog} from 'helpers/dialogs';

import {Tab, Tabs} from 'components/common/tabs';
import Editor from 'components/common/editor';
import CategoriesEditor from 'components/common/categories-editor';

import Note from 'components/desk/note';
import Record from 'components/desk/record/record';

export default createReactComponent({
  displayName: 'RecordEditorView',

  getInitialState () {
    let {name, categories, data} = this.props.note;
    return {
      name,
      categories,
      data
    }
  },

  render () {
    let {name, categories, data} = this.state;
    let note = this.props.note;

    let menu = [{
      icon: 'checkmark-round',
      handler: this.onSave
    }];

    // if new record then do not show delete button
    if (!note.isNew()) {
      menu.push({
        icon: 'trash-a',
        type: 'warn',
        handler: this.onDelete
      });
    }

    return (
      <Note id={note.id} menu={menu} className="RecordEditorView"
            onBeforeClose={this.onBeforeClose} onClose={this.onClose}>
        <Tabs onBeforeChange={this.onBeforeTabChange}>

          <Tab label="Edit" className="RecordEditorView-edit">
            <input type="text" className="name"
                   defaultValue={name} placeholder="Name" ref="name"/>
            <CategoriesEditor defaultValue={categories} ref="categories"/>
            <Editor defaultValue={data} ref="editor"/>
          </Tab>

          <Tab label="Preview" className="RecordEditorView-preview">
            <Record name={name} data={data} categories={categories}/>
          </Tab>

        </Tabs>
      </Note>
    )
  },

  getCurrentState () {
    let {name, categories, editor} = this.refs;

    return {
      name:       name.value,
      categories: categories.value,
      data:       editor.value
    };
  },

  onBeforeTabChange () {
    this.setState(this.getCurrentState());
  },

  onBeforeClose () {
    return createConfirmationDialog({
      type: 'warn',
      title: 'Close note editor',
      body: 'Close note editor without saving changes?',
      confirmationButton: 'Close'
    });
  },

  onClose () {
    let note = this.props.note;
    if (note.isNew()) {
      bus.publish('note:close-by-nId', note.nId);
    } else {
      bus.publish('note:close', note.id);
    }
  },

  onSave () {
    let note = this.props.note;

    let current = this.getCurrentState();

    let changed = {};

    if (note.name !== current.name) {
      changed.name = current.name;
    }

    if (note.categories !== current.categories) {
      changed.categories = current.categories;
    }

    if (note.data !== current.data) {
      changed.data = current.data;
    }

    if (note.isNew()) {
      bus.publish('note:create', note.nId, changed);
    } else {
      bus.publish('note:save', note.id, changed);
    }
  },

  onDelete () {
    createConfirmationDialog({
      type: 'warn',
      title: 'Delete note',
      body: 'Are you sure you would like to delete this note?',
      confirmationButton: 'Delete'
    }).then(() => bus.publish('note:delete', this.props.note.id));
  }
});
