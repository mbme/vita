import {createReactComponent, bus} from 'viter/viter';
import {createConfirmationDialog} from 'helpers/dialogs';

import {Tab, Tabs} from 'components/common/tabs';
import Icon from 'components/common/icon';
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

    return (
      <Note id={this.props.note.id} className="RecordEditorView" onClose={this.onClose}>
        <Icon type="checkmark-round" onClick={this.onSave}/>
        <Icon type="trash-a" onClick={this.onDelete}/>

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

  onBeforeTabChange () {
    let {name, categories, editor} = this.refs;

    this.setState({
      name:       name.value,
      categories: categories.value,
      data:       editor.value
    });
  },

  onClose () {
    return createConfirmationDialog({
      type: 'warn',
      title: 'Close note editor',
      body: 'Close note editor without saving changes?',
      confirmationButton: 'Close'
    });
  },

  onSave () {
    bus.publish('note:save', this.props.note.id);
  },

  onDelete () {
    createConfirmationDialog({
      type: 'warn',
      title: 'Delete note',
      body: 'Are you sure you would like to delete this note?',
      confirmationButton: 'Delete'
    }).then(function () {
      console.error('DELETE');
    }, function () {
      console.error('CANCEL');
    })
  }
});
