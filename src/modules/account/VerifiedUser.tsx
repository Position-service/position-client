import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ServerContext from '../../contexts/ServerContext';
import VerifiedUserTemplate from './VerifiedUserTemplate';

interface Props {}

type ParamTypes = {
  key: string;
};

interface State {
  confirmed: boolean;
  success: boolean;
}

const VerifiedUser = (_props: Props) => {
  const history = useHistory();
  const [state, setState] = useState<State>({
    confirmed: false,
    success: false,
  });
  const query = new URLSearchParams(useLocation().search);
  const key = query.get('key');
  const { server, setServer } = useContext(ServerContext);

  const successHandler = () => {
    history.push('/main');
  };

  const resendHandler = () => {};

  const successMessage = (
    <>
      <p>인증에 성공했습니다!</p>
      <p>포지션 회원가입을 축하드립니다.</p>
    </>
  );

  const resendMessage = (
    <>
      <p>인증에 실패했습니다.</p>
      <p>메일이 만료되었을 경우 다시 요청해 주세요.</p>
    </>
  );

  useEffect(() => {
    if (key) {
      server
        .confirmEmail(key)
        .then((res) => {
          window.localStorage.setItem('position-token', res.data.token);
          setServer(res.data.token);
          setState({ confirmed: true, success: true });
        })
        .catch((e) => {
          setState({ confirmed: true, success: false });
        });
    }
  }, [key]);

  return state.confirmed ? (
    <VerifiedUserTemplate
      buttonHandler={state.success ? successHandler : resendHandler}
      message={state.success ? successMessage : resendMessage}
    />
  ) : (
    <> 확인중 </>
  );
};

export default VerifiedUser;
