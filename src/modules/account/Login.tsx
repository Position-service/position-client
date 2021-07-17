import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ServerContext from '../../contexts/ServerContext';
import './css/Login.css';
import { LoginTemplate } from './LoginTemplate';

const Login: React.FunctionComponent = () => {
  const { server, setServer } = useContext(ServerContext);
  const history = useHistory();

  const loginHandler = (email: string, password: string) => {
    if (!email || !password) {
      alert('이메일과 패스워드를 입력해 주세요.');
    } else {
      server
        .login(email, password)
        .then((res) => {
          window.localStorage.setItem('token', res.data.token);
          setServer(res.data.token);
          history.push('/main');
        })
        .catch((e) => {
          if (e.response.status === 404) {
            alert('이메일 혹은 비밀번호가 올바르지 않습니다.');
          }
        });
    }
  };

  const signupHandler = () => {
    history.push('/signup');
  };

  return (
    <LoginTemplate loginHandler={loginHandler} signupHandler={signupHandler} />
  );
};

export default Login;
