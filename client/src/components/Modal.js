import React from 'react';

const Modal = props => {
  const { show, overlay, header, onClose } = props;
  let modal = 'modal';
  if (overlay) {
    modal = modal
      .split(' ')
      .push('overlay')
      .join(',');
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
        {props.children}
      </div>
    );
  }
  return null;
};

export default Modal;
