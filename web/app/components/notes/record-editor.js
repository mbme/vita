import {createReactComponent} from 'viter/viter';
import {Tab, Tabs} from 'components/tabs';
import Record from 'components/notes/record';
import Editor from 'components/editor';
import CategoriesEditor from './categories-editor';

export default createReactComponent({
  displayName: 'RecordEditor',

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
      <Tabs className="RecordEditor"
            onBeforeChange={this.onBeforeTabChange}>

        <Tab label="Edit" className="RecordEditor-edit">
          <input type="text" className="name"
                 defaultValue={name} placeholder="Name" ref="name"/>

          <CategoriesEditor defaultValue={categories} ref="categories"/>

          <Editor defaultValue={data} ref="editor"/>
        </Tab>

        <Tab label="Preview" className="RecordEditor-preview">
          <Record name={name} data={data} categories={categories}/>
        </Tab>

      </Tabs>
    )
  },

  onBeforeTabChange () {
    let {name, categories, editor} = this.refs;

    this.setState({
      name:       name.value,
      categories: categories.value,
      data:       editor.value
    });
  }
})
