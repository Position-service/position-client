import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ServerContext from '../../contexts/ServerContext';
import SignUpTemplate from './SignUpTemplate';

interface Props {}

const SignUp: React.FunctionComponent = (props: Props) => {
  const { server } = useContext(ServerContext);
  const history = useHistory();

  const signUpHandler = (
    email: string,
    password: string,
    passwordCheck: string,
    nickname: string
  ) => {
    if (!email || !password || !passwordCheck || !nickname) {
      alert('이메일, 닉네임, 패스워드를 입력해 주세요.');
    } else if (password !== passwordCheck) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    } else {
      server
        .signup(email, password, passwordCheck, nickname)
        .then((res) => {
          console.log(res.data);
          history.push('/main');
        })
        .catch((e) => {
          history.push('/main');
        });
    }
  };

  return <SignUpTemplate signUpHandler={signUpHandler} />;
};

export default SignUp;
