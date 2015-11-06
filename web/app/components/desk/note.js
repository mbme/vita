import React from 'react';
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
    if (this.props.shouldScroll) {
      this.scrollIntoView();
    }
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
    let {className, children, menu = []} = this.props;

    menu.push({
      icon: 'close-round',
      handler: this.onBeforeClose
    });

    let icons = menu.map(function ({icon, handler, type}) {
      return <Icon className={cx({[`is-${type}`]: type})} type={icon} onClick={handler}/>;
    });
    let iconsPanel = React.createElement(
      'div', {className: 'icons'}, ...icons
    );

    return (
      <li className={cx("Note", className)} ref="note">
        {iconsPanel}
        {children}
      </li>
    )
  },

  onBeforeClose () {
    let {onBeforeClose = resolvedPromise, onClose} = this.props;
    onBeforeClose().then(this.close).then(onClose);
  },

  close () {
    return velocity(this.refs.note, 'fadeOut', {
      duration: 200
    });
  }
})
