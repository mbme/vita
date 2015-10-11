import velocity from 'velocity';
import cx from 'classnames';

import {createReactComponent, bus} from 'viter/viter';
import {resolvedPromise} from 'helpers/utils';
import Icon from 'components/common/icon';

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
    if (id === this.props.id) {
      this.scrollIntoView();
    }
  },

  scrollIntoView () {
    let el = this.refs.note;
    velocity(el, 'scroll', {
      container: el.parentNode,
      duration: 400,
      offset: 20,
      easing: "ease-in-out"
    });
  },

  render () {
    let {className, children} = this.props;
    return (
      <li className={cx("Note", className)} ref="note">
        <div className="icons">
          <Icon type="close-round" onClick={this.onClose}/>
        </div>
        {children}
      </li>
    )
  },

  onClose () {
    let {onClose = resolvedPromise} = this.props;
    onClose().then(this.close);
  },

  close () {
    velocity(this.refs.note, 'fadeOut', {
      duration: 200
    }).then(() => bus.publish('note:close', this.props.id));
  }
})
