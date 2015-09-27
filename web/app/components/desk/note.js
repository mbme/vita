import ReactDOM from 'react-dom';
import velocity from 'velocity';

import {createReactComponent, bus} from 'viter/viter';
import Icon from 'components/icon';
import Record from 'components/notes/record';


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
