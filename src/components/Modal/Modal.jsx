import React from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import './Modal.scss';

const Modal = ({ handleCloseModal, isOpen, children, className, ...props }) => (
  <ReactModal
    className={classNames('modal', className)}
    isOpen={isOpen}
    onRequestClose={handleCloseModal}
    overlayClassName={classNames('overlay', props.overlayClassName)}
    closeTimeoutMS={400}
    {...props}
  >
    <div className="modal__wrapper">
      <button className="modal__close" onClick={handleCloseModal}>
        &times;
      </button>
      {children}
    </div>
  </ReactModal>
);

export default Modal;
