import React from 'react';
import './css/VerifiedUser.css';

interface Props {
  buttonHandler: () => void;
  message: React.ReactNode;
}

const VerifiedUserTemplate = (props: Props) => {
  return (
    <section className="section-verified">
      <div className="alert-circle-gray">
        <div className="logo-circle-white">
          <div className="position-logo-green" />
        </div>

        <div className="alert-message">{props.message}</div>
        <button className="confirm-button" onClick={props.buttonHandler}>
          메인으로
        </button>
      </div>
    </section>
  );
};

export default VerifiedUserTemplate;
