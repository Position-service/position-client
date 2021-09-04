import React from 'react';
import InputField from './InputField';

interface Props {
  password: string;
  passwordHandler: () => void;
  passwordCheck: string;
  passwordCheckHandler: () => void;
  confirmed: boolean;
  submitHandler: () => void;
}

const PasswordChangeModal = (props: Props) => {
  const {
    password,
    passwordHandler,
    passwordCheck,
    passwordCheckHandler,
    confirmed,
    submitHandler,
  } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '95%',
        justifyContent: 'space-between',
        paddingTop: '5%',
      }}
    >
      <div>
        {confirmed ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '26vh',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p
              style={{
                alignSelf: 'flex-start',
                paddingLeft: 15,
                borderLeft: '3px solid #59f87e',
              }}
            >
              비밀번호 변경
            </p>
            <InputField
              name={'새 비밀번호'}
              value={password}
              changeHandler={passwordHandler}
            />
            <InputField
              name={'새 비밀번호 확인'}
              value={passwordCheck}
              changeHandler={passwordCheckHandler}
            />
            <p
              style={{
                fontSize: '0.8em',
                fontFamily: 'NotoSans-Regular',
                color: '#868686',
              }}
            >
              비밀번호는 8~16자의 영문, 숫자를 조합하여 사용하십시오.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '13vh',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p
              style={{
                alignSelf: 'flex-start',
                paddingLeft: 15,
                borderLeft: '3px solid #59f87e',
              }}
            >
              비밀번호 확인
            </p>
            <InputField
              name={'현재 비밀번호'}
              value={password}
              changeHandler={passwordHandler}
            />
          </div>
        )}
      </div>
      <button className="modal-submit-button" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default PasswordChangeModal;
