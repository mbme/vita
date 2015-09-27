import {createReactComponent, bus} from 'viter/viter';
import Icon from 'components/icon';
import Record from 'components/notes/record';

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
        <Record note={note} />
      </li>
    )
  },

  onClose () {
    bus.publish('note:close', this.props.note.id);
  }
})
