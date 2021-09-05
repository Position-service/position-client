import React, { useState } from 'react';
import InputField from './components/InputField';
import './css/Login.css';

interface Props {
  loginHandler: (email: string, password: string) => void;
  signupHandler: () => void;
}

interface State {
  email: string;
  password: string;
}

export const LoginTemplate: React.FunctionComponent<Props> = (props: Props) => {
  const [loginInfo, setLoginInfo] = useState<State>({
    email: '',
    password: '',
  });

  return (
    <section className="section-login">
      <div className="circle-wrapper">
        <div className="circle-green">
          <div className="position-logo" />
        </div>
        <div className="circle-gray">
          <div className="button-wrapper">
            <InputField
              name="E-mail"
              value={loginInfo?.email}
              changeHandler={(input: string) => {
                setLoginInfo({ ...loginInfo, email: input });
              }}
            />
            <InputField
              name="Password"
              value={loginInfo?.password}
              changeHandler={(input: string) => {
                setLoginInfo({ ...loginInfo, password: input });
              }}
              secure={true}
            />
            <button
              className="button-login"
              onClick={() =>
                props.loginHandler(loginInfo.email, loginInfo.password)
              }
            >
              <p style={{ color: '#fff' }}>Sign In</p>
            </button>
            <button className="button-signup" onClick={props.signupHandler}>
              <p>Sign Up</p>
            </button>
            <a className="a-password" href="#">
              <p>{'비밀번호를 잊으셨습니까?'}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
