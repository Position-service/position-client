import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ServerContext from '../../contexts/ServerContext';
import VerifiedUserTemplate from './VerifiedUserTemplate';
import ReactLoading from 'react-loading';
import useWindowDimensions from '../../hooks/useWindowDimension';

interface Props {}

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
  const { width, height } = useWindowDimensions();

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
      buttonName={state.success ? '메인으로' : '메일 재전송'}
    />
  ) : (
    <div
      style={{
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '-10vh',
      }}
    >
      <ReactLoading
        type={'bubbles'}
        color={'#59F87E'}
        height={'20%'}
        width={'20%'}
      />
    </div>
  );
};

export default VerifiedUser;
