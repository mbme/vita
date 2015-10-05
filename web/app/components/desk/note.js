import ReactDOM from 'react-dom';
import velocity from 'velocity';
import cx from 'classnames';

import {createReactComponent, bus} from 'viter/viter';
import Icon from 'components/icon';
import Record from 'components/notes/record';
import RecordEditor from 'components/notes/record-editor';


export default createReactComponent({
  displayName: 'Note',

  componentWillMount () {
    bus.subscribe('note:open', this.maybeScrollMeIntoView);
  },

  componentWillUnmount () {
    bus.unsubscribe('note:open', this.maybeScrollMeIntoView);
  },

  componentDidMount () {
    this.scrollIntoView();
  },

  maybeScrollMeIntoView (id) {
    if (id === this.props.note.id) {
      this.scrollIntoView();
    }
  },

  scrollIntoView () {
    let el = ReactDOM.findDOMNode(this);
    velocity(el, 'scroll', {
      container: el.parentNode,
      duration: 400,
      offset: 20,
      easing: "ease-in-out"
    });
  },

  renderNote () {
    let {name, data, categories} = this.props.note;
    return (
      <li className="Note">
        <div className="icons">
          <Icon type="close-round" onClick={this.onClose}/>
        </div>
        <div className="icons-right">
          <Icon type="compose" onClick={this.onEdit}/>
          <Icon type="images"/>
        </div>
        <Record name={name} data={data} categories={categories} />
      </li>
    )
  },

  renderNoteEditor () {
    let {note} = this.props;
    return (
      <li className="Note is-edit">
        <div className="icons">
          <Icon type="checkmark-round"/>
          <Icon type="close-round" onClick={this.onClose}/>
        </div>
        <div className="icons-right">
          <Icon type="trash-a"/>
          <Icon type="images"/>
        </div>
        <RecordEditor note={note} />
      </li>
    )
  },

  render () {
    let {note} = this.props;

    if (note.edit) {
      return this.renderNoteEditor();
    } else {
      return this.renderNote();
    }
  },

  onClose () {
    let el = ReactDOM.findDOMNode(this);
    velocity(el, 'fadeOut', {
      duration: 200
    }).then(() => bus.publish('note:close', this.props.note.id));
  },

  onEdit () {
    bus.publish('note:edit', this.props.note.id);
  }
})
