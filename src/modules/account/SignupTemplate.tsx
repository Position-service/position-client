import React, { useState } from 'react';
import InputField from './components/InputField';
import './css/SignUp.css';

interface Props {
  signUpHandler: (
    username: string,
    password: string,
    passwordCheck: string,
    nickName: string
  ) => void;
}

interface State {
  email: string;
  nickName: string;
  password: string;
  passwordCheck: string;
  mailSent: boolean;
}

const SignUpTemplate: React.FunctionComponent<Props> = (props: Props) => {
  const [signUpInfo, setSignUpInfo] = useState<State>({
    email: '',
    nickName: '',
    password: '',
    passwordCheck: '',
    mailSent: false,
  });

  const { email, nickName, password, passwordCheck, mailSent } = signUpInfo;

  return (
    <section className="section-main">
      <div className="modal-signup">
        <InputField
          value={email}
          name={'E-mail'}
          changeHandler={(input: string) => {
            setSignUpInfo({ ...signUpInfo, email: input });
          }}
        />
        <button
          className="button-verify-mail"
          disabled={mailSent}
          onClick={() => {
            setSignUpInfo({ ...signUpInfo, mailSent: true });
          }}
        >
          {mailSent ? '인증 메일이 발송되었습니다!' : '인증메일 발송하기'}
        </button>
        <div className="signup-textfield-wrapper">
          {mailSent && (
            <>
              <InputField
                value={nickName}
                name={'Nickname'}
                changeHandler={(input: string) => {
                  setSignUpInfo({ ...signUpInfo, nickName: input });
                }}
              />
              <InputField
                value={password}
                name={'Password'}
                changeHandler={(input: string) => {
                  setSignUpInfo({ ...signUpInfo, password: input });
                }}
              />
              <InputField
                value={passwordCheck}
                name={'Password Check'}
                changeHandler={(input: string) => {
                  setSignUpInfo({ ...signUpInfo, passwordCheck: input });
                }}
              />
            </>
          )}
        </div>
        <button
          className="button-signup"
          onClick={() =>
            props.signUpHandler(email, password, passwordCheck, nickName)
          }
        >
          <p>Sign Up</p>
        </button>
      </div>
    </section>
  );
};

export default SignUpTemplate;
