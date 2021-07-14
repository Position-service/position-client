import React, { ChangeEvent, useState } from 'react';
import './css/Login.css';

interface Props {
  loginHandler: (email: string, password: string) => void;
  signupHandler: (
    username: string,
    password: string,
    passwordCheck: string,
    nickName: string
  ) => void;
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
    <section className="section-main">
      <div className="circle-wrapper">
        <div className="circle-green">
          <div className="position-logo" />
        </div>
        <div className="circle-gray">
          <div className="button-wrapper">
            <input
              className="input-email"
              value={loginInfo?.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                console.log(loginInfo.email);
                setLoginInfo({ ...loginInfo, email: e.target.value });
              }}
              placeholder="E-mail"
            />
            <input
              className="input-password"
              value={loginInfo?.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setLoginInfo({ ...loginInfo, password: e.target.value });
              }}
              placeholder="Password"
            />
            <button className="button-login">
              <p style={{ color: '#fff' }}>Sign In</p>
            </button>
            <button className="button-signin">
              <p>Sign Up</p>
            </button>
            <a className="a-password" href="">
              <p>{'비밀번호를 잊으셨습니까?'}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
