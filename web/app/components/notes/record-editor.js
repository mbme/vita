import _ from 'lodash';
import {createReactComponent} from 'viter/viter';
import {Tab, Tabs} from 'components/tabs';
import Record from 'components/notes/record';
import Editor from 'components/editor';

export default createReactComponent({
  displayName: 'RecordEditor',

  getInitialState () {
    let {name, categories, data} = this.props.note;
    return {
      name,
      data,
      categories: _.clone(categories)
    }
  },

  render () {
    let {name, categories, data} = this.state;

    return (
      <Tabs className="RecordEditor"
            onBeforeChange={this.onBeforeTabChange}>

        <Tab label="Edit">
          <input type="text" className="name"
                 defaultValue={name} placeholder="Name" ref="name"/>

          <input type="text" className="categories"
                 defaultValue={categories} placeholder="Categories" ref="categories"/>

          <Editor defaultValue={data} ref="editor"/>
        </Tab>

        <Tab label="Preview">
          <Record name={name} data={data} categories={categories}/>
        </Tab>

      </Tabs>
    )
  },

  onBeforeTabChange () {
    let {name, categories, editor} = this.refs;

    this.setState({
      name: name.value,
      categories: [categories.value],
      data: editor.value
    });
  }
})
