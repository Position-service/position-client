import React from 'react';

interface Props {
  confirmHandler: () => void;
}

const VerifyModal = (props: Props) => {
  return (
    <>
      <div className="position-logo-green" />
      <div
        style={{
          fontSize: 15,
          fontFamily: 'NotoSans-Regular',
        }}
      >
        <p>메일 인증이 완료되지 않았습니다!</p>
        <p>메일함으로 가서 인증을 완료해주세요.</p>
      </div>
      <button className="modal-confirm-button" onClick={props.confirmHandler}>
        확인
      </button>
    </>
  );
};

export default VerifyModal;
