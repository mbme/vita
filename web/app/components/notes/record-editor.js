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
      name:       name,
      categories: _.clone(categories),
      data:       data
    }
  },

  componentWillMount () {
  },

  render () {
    return (
      <Tabs className="RecordEditor"
            onBeforeChange={this.onBeforeTabChange}>

        <Tab label="Edit">
          <Editor value="1"/>
        </Tab>

        <Tab label="Preview">
          <Record />
        </Tab>

      </Tabs>
    )
  },

  onBeforeTabChange () {
    console.error('HERE');
  }
})
