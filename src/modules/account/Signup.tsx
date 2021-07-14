import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ServerContext from '../../contexts/ServerContext';
import SignUpTemplate from './SignUpTemplate';

interface Props {}

const SignUp: React.FunctionComponent = (props: Props) => {
  const { server } = useContext(ServerContext);
  const history = useHistory();

  const signUpHandler = (
    username: string,
    password: string,
    passwordCheck: string,
    nickName: string
  ) => {
    if (!username || !password || !passwordCheck || !nickName) {
      alert('이메일, 닉네임, 패스워드를 입력해 주세요.');
    } else if (password !== passwordCheck) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    } else {
      server
        .signup(username, password, passwordCheck, nickName)
        .then((res) => {
          history.push('/signup');
        })
        .catch((e) => {});
    }
  };

  return <SignUpTemplate signUpHandler={signUpHandler} />;
};

export default SignUp;
