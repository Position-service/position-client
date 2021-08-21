import React, { FunctionComponent } from 'react';
import '../css/AlertModal.css';

interface Props {
  backgroundColor: string;
  buttonHandler: () => void;
  children?: React.ReactNode;
}

const AlertModal = (props: Props) => {
  return (
    <div className="modal-background">
      <div
        className="section-modal"
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.children}
        <button className="modal-confirm-button" onClick={props.buttonHandler}>
          확인
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
