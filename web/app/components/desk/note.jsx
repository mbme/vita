import React from 'react';
import cx from 'classnames';

import { bus } from 'init';
import { createReactComponent } from 'viter/viter';

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

    this.refs.note.scrollIntoView();
  },

  render () {
    let { className, children, menu = [], onClose } = this.props;

    menu.push({
      icon: 'close-round',
      handler: onClose
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
