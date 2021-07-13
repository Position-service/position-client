import React, { useContext } from 'react';
import ServerContext from '../../contexts/ServerContext';
import './css/Login.css';
import { LoginTemplate } from './LoginTemplate';

const Login: React.FunctionComponent = () => {
  const { server } = useContext(ServerContext);

  const loginHandler = (email: string, password: string) => {
    server
      .login(email, password)
      .then((res) => {
        window.localStorage.setItem('token', res.data.token);
      })
      .catch((e) => {});
  };

  const signupHandler = (
    username: string,
    password: string,
    passwordCheck: string,
    nickName: string
  ) => {
    server
      .signup(username, password, passwordCheck, nickName)
      .then((res) => {})
      .catch((e) => {});
  };

  return (
    <LoginTemplate loginHandler={loginHandler} signupHandler={signupHandler} />
  );
};

export default Login;
