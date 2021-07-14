import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ServerContext from '../../contexts/ServerContext';
import './css/Login.css';
import { LoginTemplate } from './LoginTemplate';

const Login: React.FunctionComponent = () => {
  const { server } = useContext(ServerContext);
  const history = useHistory();

  const loginHandler = (email: string, password: string) => {
    server
      .login(email, password)
      .then((res) => {
        window.localStorage.setItem('token', res.data.token);
        history.push('/main');
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
      .then((res) => {
        history.push('/signup');
      })
      .catch((e) => {});
  };

  return (
    <LoginTemplate loginHandler={loginHandler} signupHandler={signupHandler} />
  );
};

export default Login;
