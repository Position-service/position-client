import React from 'react';
import { useHistory } from 'react-router-dom';
import VerifiedUserTemplate from './VerifiedUserTemplate';

interface Props {}

const VerifiedUser = (props: Props) => {
  const history = useHistory();
  const buttonHandler = () => {
    history.push('/main');
  };

  return <VerifiedUserTemplate buttonHandler={buttonHandler} />;
};

export default VerifiedUser;
