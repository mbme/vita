import React from 'react';
import velocity from 'velocity';
import cx from 'classnames';

import { bus } from 'init';
import { createReactComponent } from 'viter/viter';
import { resolvedPromise } from 'helpers/utils';
import Icon from 'components/icon';

/**
 * General notes container which shows note menu and do animations.
 */
export default createReactComponent({
  displayName: 'Note',

  componentWillMount () {
    bus.subscribe('note:focus', this.maybeScrollIntoView);
  },

  componentWillUnmount () {
    bus.unsubscribe('note:focus', this.maybeScrollIntoView);
  },

  maybeScrollIntoView (id) {
    if (id !== this.props.id) {
      return;
    }

    let el = this.refs.note;
    velocity(el, 'scroll', {
      duration: 300,
      offset: -6,
      easing: 'ease-in-out'
    });
  },

  onBeforeClose () {
    let { onBeforeClose = resolvedPromise, onClose } = this.props;
    onBeforeClose().then(this.close).then(onClose);
  },

  close () {
    return velocity(this.refs.note, 'fadeOut', {
      duration: 200
    });
  },

  render () {
    let { className, children, menu = [] } = this.props;

    menu.push({
      icon: 'close-round',
      handler: this.onBeforeClose
    });

    let icons = menu.map(function ({ icon, handler, type }) {
      return <Icon className={cx({ [`is-${type}`]: type })} type={icon} onClick={handler}/>;
    });
    // we do this to avoid addding keys to icons
    let iconsPanel = React.createElement(
      'div', { className: 'icons' }, ...icons
    );

    return (
      <li className={cx('Note', className)} ref="note">
        {iconsPanel}
        {children}
      </li>
    );
  }
});
