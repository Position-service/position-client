import React, { useContext, useState } from 'react';
import AlertModal from '../account/components/AlertModal';
import PasswordChangeModal from '../account/components/PasswordChangeModal';
import CalendarTemplate from './components/CalendarTemplate';
import Header from './components/Header';
import TodoList from './components/TodoList';
import VerifyModal from '../account/components/VerifyModal';
import './css/Main.css';
import UserContext from '../../contexts/UserContext';

interface Props {
  logoutHandler: () => void;
}

const MainTemplate: React.FunctionComponent<Props> = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="page-main">
        <Header
          verified={false}
          nickname={user.nickName}
          logoutHandler={props.logoutHandler}
          passwordChangeHandler={() => setPasswordModalVisible(true)}
        />
        <section className="section-todolist-calender">
          <TodoList />
          <CalendarTemplate />
        </section>
      </div>
      {modalVisible && (
        <AlertModal
          backgroundColor={'#fff'}
          closeHandler={() => {
            setModalVisible(false);
          }}
          children={
            <VerifyModal
              confirmHandler={() => {
                setModalVisible(false);
              }}
            />
          }
        />
      )}
      {passwordModalVisible && (
        <AlertModal
          backgroundColor={'#EBEBEB'}
          closeHandler={() => {
            setPasswordModalVisible(false);
          }}
          children={
            <PasswordChangeModal
              password={''}
              passwordHandler={() => {}}
              passwordCheck={''}
              passwordCheckHandler={() => {}}
              confirmed={true}
              submitHandler={() => {}}
            />
          }
          title={
            <p
              style={{
                fontFamily: 'Lexend',
                fontSize: '1.1em',
              }}
            >
              Change Password
            </p>
          }
        />
      )}
    </>
  );
};

export default MainTemplate;
