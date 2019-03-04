import React from 'react';

const Modal = props => {
  const { show, overlay, header, onClose } = props;
  let modal = 'modal';
  if (overlay) {
    modal = modal
      .split(' ')
      .push('overlay')
      .toString();
  }
  if (show) {
    return (
      <div className={modal}>
        <div className="modal-header">
          {header}
          <span role="button" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    );
  }
  return null;
};

export default Modal;
