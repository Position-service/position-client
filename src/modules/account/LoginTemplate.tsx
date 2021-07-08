import React from 'react';
import './css/Login.css';
import logo1x from './img/position-logo.png';
import logo2x from './img/position-logo@2x.png';

interface Props {
  loginHandler: (username: string, password: string) => void;
  signupHandler: (
    username: string,
    password: string,
    passwordCheck: string
  ) => void;
}

export const LoginTemplate: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <section className="section-main">
      <div className="circle-wrapper">
        <div className="circle-green">
          <div className="position-logo">
            <img
              src={logo1x}
              srcSet={logo1x + ' 1x,' + logo2x + ' 2x'}
              width="374"
              height="381"
            />
          </div>
        </div>
        <div className="circle-gray"></div>
      </div>
    </section>
  );
};
