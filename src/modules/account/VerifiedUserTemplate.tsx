import React from 'react';
import './css/VerifiedUser.css';

interface Props {
  buttonHandler: () => void;
}

const VerifiedUserTemplate = (props: Props) => {
  return (
    <section className="section-verified">
      <div className="alert-circle-gray">
        <div className="logo-circle-white">
          <div className="position-logo-green" />
        </div>

        <div className="alert-message">
          <p>인증에 성공했습니다!</p>
          <p>포지션 회원가입을 축하드립니다.</p>
        </div>
        <button className="confirm-button" onClick={props.buttonHandler}>
          메인으로
        </button>
      </div>
    </section>
  );
};

export default VerifiedUserTemplate;
