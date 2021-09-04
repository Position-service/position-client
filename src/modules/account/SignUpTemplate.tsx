import React, { useState } from 'react';
import InputField from './components/InputField';
import './css/SignUp.css';

interface Props {
  signUpHandler: (
    email: string,
    password: string,
    passwordCheck: string,
    nickname: string
  ) => void;
}

interface State {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

const SignUpTemplate: React.FunctionComponent<Props> = (props: Props) => {
  const [signUpInfo, setSignUpInfo] = useState<State>({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });

  const { email, nickname, password, passwordCheck } = signUpInfo;

  return (
    <section className="section-signup">
      <div className="modal-signup">
        <InputField
          value={email}
          name={'E-mail'}
          changeHandler={(input: string) => {
            setSignUpInfo({ ...signUpInfo, email: input });
          }}
        />
        <p className="remind-verify-mail">
          {'회원가입이 끝난 후 위 주소로 인증 메일이 발송될 예정입니다.'}
        </p>
        <div className="signup-textfield-wrapper">
          <InputField
            value={nickname}
            name={'Nickname'}
            changeHandler={(input: string) => {
              setSignUpInfo({ ...signUpInfo, nickname: input });
            }}
          />
          <InputField
            value={password}
            name={'Password'}
            changeHandler={(input: string) => {
              setSignUpInfo({ ...signUpInfo, password: input });
            }}
          />
          <p className="remind-verify-mail">
            {'비밀번호는 8~16자의 영문, 숫자를 조합하여 사용하십시오.'}
          </p>
          <InputField
            value={passwordCheck}
            name={'Password Check'}
            changeHandler={(input: string) => {
              setSignUpInfo({ ...signUpInfo, passwordCheck: input });
            }}
          />
        </div>
        <button
          className="button-signup"
          onClick={() =>
            props.signUpHandler(email, password, passwordCheck, nickname)
          }
        >
          <p>Sign Up</p>
        </button>
      </div>
    </section>
  );
};

export default SignUpTemplate;
