import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ServerContext from '../../contexts/ServerContext';
import MainTemplate from './MainTemplate';

interface Props {}

const Main = (props: Props) => {
  const history = useHistory();
  const { setServer } = useContext(ServerContext);

  const logoutHandler = () => {
    window.localStorage.removeItem('position-token');
    setServer('');
    history.push('/login');
  };
  return (
    <>
      <MainTemplate logoutHandler={logoutHandler} />
    </>
  );
};

export default Main;
