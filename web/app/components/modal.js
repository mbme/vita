import React from 'react';
import {createReactComponent} from 'viter/viter';
import Icon from 'components/icon';
import cx from 'classnames';

export default createReactComponent(function Modal ({config}) {
  let {body, buttons, title, onCancel, showExitIcon, type} = config;

  let exitIcon = '';
  if (showExitIcon) {
    exitIcon = <Icon type="close-round" className="Exit" onClick={onCancel} />
  }

  let buttonsSection = React.createElement(
    'div', {className: 'Modal-buttons'}, ...buttons
  );

  return (
    <div className={cx('Modal', {[`Modal-${type}`]: type})}>
      {exitIcon}
      <div className="Modal-header">
        {title}
      </div>
      <div className="Modal-body">
        {body}
      </div>
      {buttonsSection}
    </div>
  )
});
