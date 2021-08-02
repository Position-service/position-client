import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ServerContext from '../../contexts/ServerContext';
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
          window.localStorage.setItem('position-token', res.data.token);
          setServer(res.data.token);
          history.push('/main');
        })
        .catch((e) => {
          if (e.response.status === 404) {
            alert('등록되지 않은 사용자입니다. 회원가입을 진행해주세요.');
          } else if (e.response.status === 401) {
            alert('비밀번호가 올바르지 않습니다.');
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
