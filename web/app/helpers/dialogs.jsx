import React from 'react';
import cx from 'classnames';
import { createReactComponent } from 'viter/viter';
import { createDeferred } from 'helpers/utils';
import { openModal, closeModal } from 'controllers/app-controller';

import Button from 'components/button';
import Icon from 'components/icon';

const Modal = createReactComponent({
  displayName: 'Modal',

  render () {
    let { type, children } = this.props;

    return React.createElement(
      'div', { className: cx('Modal', { [`is-${type}`]: type }) },
      ...children
    );
  }
});

let modalId = 0;

export function createModal (type) {
  let id = modalId += 1;
  return {
    open (...children) {
      let modal = React.createElement(
        Modal, { key: id, type, children }
      );
      openModal(id, modal);
    },

    close () {
      closeModal(id);
    }
  };
}

export function buildHeader (title) {
  return (
    <div className="Modal-header"><h1>{title}</h1></div>
  );
}

export function buildBody (children, className) {
  return React.createElement(
    'div', { className: cx('Modal-body', className) }, ...children
  );
}

export function buildButtons (buttons, className) {
  return React.createElement(
    'div', { className: cx('Modal-buttons', className) }, ...buttons
  );
}

function buildCloseIcon (onClose) {
  return (
    <Icon type="close-round" className="Exit" onClick={onClose} />
  );
}

export function modalBuilder () {
  let data = {
    closeIcon: false,
    title: false,
    body: [],
    buttons: []
  };

  return {
    addCloseIcon (onClose) {
      data.closeIcon = buildCloseIcon(onClose);
      return this;
    },

    setTitle (title) {
      data.title = title;
      return this;
    },

    addBodyElement (el) {
      data.body.push(el);
      return this;
    },

    addButton (el) {
      data.buttons.push(el);
      return this;
    },

    build () {
      return [
        data.closeIcon,
        buildHeader(data.title),
        buildBody(data.body),
        buildButtons(data.buttons)
      ];
    }
  };
}

export function createConfirmationDialog (config) {
  let modal = createModal(config.type);
  let deferred = createDeferred();

  function onSuccess () {
    modal.close();
    deferred.resolve();
  }

  function onCancel () {
    modal.close();
    deferred.reject();
  }

  let children = modalBuilder(
  ).addCloseIcon(onCancel)
   .setTitle(config.title)
   .addBodyElement(config.body)
   .addButton(
     <Button label="Cancel"
             onClick={onCancel}/>
   )
   .addButton(
     <Button label={config.confirmationButton || 'OK'}
             onClick={onSuccess}
             type="primary" />
   )
   .build();

  modal.open(...children);

  return deferred.promise;
}
