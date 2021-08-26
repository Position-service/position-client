import React, { useState } from 'react';
import AlertModal from '../account/components/AlertModal';
import CalendarTemplate from './components/CalendarTemplate';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './css/Main.css';

interface Props {
  logoutHandler: () => void;
}

const MainTemplate: React.FunctionComponent<Props> = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const verifyModal = (
    <>
      <div className="position-logo-green" />
      <div
        style={{
          fontSize: 15,
          fontFamily: 'NotoSans-Regular',
        }}
      >
        <p>메일 인증이 완료되지 않았습니다!</p>
        <p>메일함으로 가서 인증을 완료해주세요.</p>
      </div>
    </>
  );

  const passwordModal = <>Password Change</>;
  return (
    <>
      <div className="page-main">
        <Header
          verified={false}
          nickname={'Minji'}
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
          buttonHandler={() => {
            setModalVisible(false);
          }}
          children={verifyModal}
        />
      )}
      {passwordModalVisible && (
        <AlertModal
          backgroundColor={'#EBEBEB'}
          buttonHandler={() => {
            setPasswordModalVisible(false);
          }}
          children={passwordModal}
        />
      )}
    </>
  );
};

export default MainTemplate;
