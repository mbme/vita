import { createReactComponent, PropTypes } from 'viter/viter';

import cx from 'classnames';

import Button from 'components/button';
import Icon from 'components/icon';

let modalsCount = 0;

function buildCloseButton (onClose) {
  return (
    <Icon type="close-round" className="Exit" onClick={onClose} />
  );
}

const Modal = createReactComponent({
  displayName: 'Modal',

  propTypes: {
    children:        PropTypes.node.isRequired,
    onClose:         PropTypes.func,
    type:            PropTypes.string,
    className:       PropTypes.string,
    showCloseButton: PropTypes.bool,
  },

  componentWillMount () {
    modalsCount += 1;

    if (modalsCount === 1) {
      document.body.classList.add('no-scroll');
    }
  },

  componentWillUnmount () {
    modalsCount -= 1;

    if (modalsCount === 0) {
      document.body.classList.remove('no-scroll');
    }
  },

  render () {
    let { type, className, showCloseButton, onClose, children } = this.props;

    let closeButton;
    if (showCloseButton) {
      closeButton = buildCloseButton(onClose);
    }

    return (
      <div className="ModalContainer">
        <div className="ModalBackdrop"></div>
        <div className={cx('Modal', className, { [`is-${type}`]: type })}>
          {closeButton}
          {children}
        </div>
      </div>
    );
  },
});


Modal.Header = createReactComponent({
  displayName: 'ModalHeader',

  propTypes: {
    children: PropTypes.node.isRequired,
  },

  render () {
    return (
      <div className="Modal-header">{this.props.children}</div>
    );
  },
});

Modal.Title = createReactComponent({
  displayName: 'ModalTitle',

  propTypes: {
    children: PropTypes.node.isRequired,
  },

  render () {
    return (
      <h1 className="Modal-title">{this.props.children}</h1>
    );
  },
});

Modal.Body = createReactComponent({
  displayName: 'ModalBody',

  propTypes: {
    children: PropTypes.node.isRequired,
  },

  render () {
    return (
      <div className="Modal-body">{this.props.children}</div>
    );
  },
});

Modal.Footer = createReactComponent({
  displayName: 'ModalFooter',

  propTypes: {
    children: PropTypes.node.isRequired,
  },

  render () {
    return (
      <div className="Modal-footer">{this.props.children}</div>
    );
  },
});


export function createConfirmationModal ({ type,
                                           title,
                                           body,
                                           confirmationButton = 'OK',
                                           onSuccess,
                                           onCancel,
                                           onClose }) {
  return (
    <Modal type={type} showCloseButton onClose={onClose || onCancel}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button label="Cancel" onClick={onCancel} />
        <Button label={confirmationButton} onClick={onSuccess} type="primary" />
      </Modal.Footer>
    </Modal>
  );
}

export default Modal;
