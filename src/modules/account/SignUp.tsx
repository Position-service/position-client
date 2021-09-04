import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ServerContext from '../../contexts/ServerContext';
import { CheckPassword } from '../../utils/CheckPassword';
import SignUpTemplate from './SignUpTemplate';

interface Props {}

const SignUp: React.FunctionComponent = (props: Props) => {
  const { server } = useContext(ServerContext);
  const history = useHistory();

  const signUpHandler = (
    email: string,
    password: string,
    password_check: string,
    nickName: string
  ) => {
    if (!email || !password || !password_check || !nickName) {
      alert('이메일, 닉네임, 패스워드를 입력해 주세요.');
    } else if (password !== password_check) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    } else if (!CheckPassword(password)) {
      alert(
        '영문자와 숫자를 모두 사용하여 8~16자리의 비밀번호를 입력해 주세요.'
      );
    } else {
      server
        .signup(email, password, password_check, nickName)
        .then((res) => {
          console.log(res.data);
          history.push('/main');
        })
        .catch((e) => {
          if (e.response?.status === 400) {
            alert('이미 존재하는 계정압니다.');
          } else {
            alert('서버 오류입니다. 관리자에게 문의해주세요.');
          }
        });
    }
  };

  return <SignUpTemplate signUpHandler={signUpHandler} />;
};

export default SignUp;
