import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import ServerContext from '../../contexts/ServerContext';
import VerifiedUserTemplate from './VerifiedUserTemplate';

interface Props {}

type ParamTypes = {
  key: string;
};

const VerifiedUser = (props: Props) => {
  const history = useHistory();
  const [confirmed, setConfirmed] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  const key = query.get('key');
  console.log(key);
  const { server, setServer } = useContext(ServerContext);
  const buttonHandler = () => {
    history.push('/main');
  };

  useEffect(() => {
    if (key) {
      server
        .confirmEmail(key)
        .then((res) => {
          window.localStorage.setItem('position-token', res.data.token);
          setServer(res.data.token);
          setConfirmed(true);
        })
        .catch((e) => {
          console.log(e.response);
        });
    }
  }, [key]);

  return confirmed ? (
    <VerifiedUserTemplate buttonHandler={buttonHandler} />
  ) : (
    <> 확인중 </>
  );
};

export default VerifiedUser;
