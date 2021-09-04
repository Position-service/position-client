import React from 'react';
import '../css/AlertModal.css';
import closeIcon from '../img/icon-close.png';
import closeIcon2x from '../img/icon-close@2x.png';

interface Props {
  backgroundColor: string;
  closeHandler: () => void;
  children?: React.ReactNode;
  title?: React.ReactNode;
}

const AlertModal: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="modal-background">
      <div
        className="section-modal"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="section-modal-title">
          <button className="modal-close-button" onClick={props.closeHandler}>
            <img
              className="icon-close"
              alt="close_icon"
              src={closeIcon}
              srcSet={`${closeIcon} 1x, ${closeIcon2x} 2x`}
            />
          </button>
          {props.title}
        </div>
        <div className="modal-children">{props.children}</div>
      </div>
    </div>
  );
};

export default AlertModal;
