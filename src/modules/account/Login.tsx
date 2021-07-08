import React, { useContext } from 'react';
import ServerContext from '../../contexts/ServerContext';
import './css/Login.css';
import { LoginTemplate } from './LoginTemplate';

const Login: React.FunctionComponent = () => {
  const { server } = useContext(ServerContext);

  const loginHandler = (username: string, password: string) => {
    server
      .login(username, password)
      .then((res) => {
        window.localStorage.setItem('token', res.data.token);
      })
      .catch((e) => {});
  };

  const signupHandler = (
    username: string,
    password: string,
    passwordCheck: string
  ) => {
    server
      .signup(username, password, passwordCheck)
      .then((res) => {})
      .catch((e) => {});
  };

  return (
    <LoginTemplate loginHandler={loginHandler} signupHandler={signupHandler} />
  );
};

export default Login;
