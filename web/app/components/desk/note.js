import {createReactComponent, bus} from 'viter/viter';
import Icon from 'components/icon';
import Markdown from 'components/markdown';

export default createReactComponent({
  displayName: 'Note',

  render () {
    let {note} = this.props;

    return (
      <li className="Note">
        <div className="icons">
          <Icon type="close-round" onClick={this.onClose}/>
        </div>
        <div className="icons-right">
          <Icon type="compose"/>
          <Icon type="images"/>
        </div>
        <h1 className="title">{note.name}</h1>
        <h4 className="categories">{note.categories.join(', ')}</h4>
        <Markdown text={note.data}/>
      </li>
    )
  },

  onClose () {
    bus.publish('note:close', this.props.note.id);
  }
})
