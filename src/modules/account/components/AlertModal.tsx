import React, { FunctionComponent } from 'react';
import './AlertModal.css';

interface Props {
  buttonHandler: () => void;
  children?: React.ReactNode;
}

const AlertModal = (props: Props) => {
  return (
    <div className="modal-background">
      <div className="section-modal">
        <div className="position-logo-green" />
        {props.children}
        <button className="modal-confirm-button" onClick={props.buttonHandler}>
          확인
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
