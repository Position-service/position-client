import React, { useContext, useState } from 'react';
import { TaskGroup } from '../../../types/Task';
import '../css/TodoList.css';
import TodoGroup from './TodoGroup';
import closeIcon from '../../account/img/icon-close.png';
import closeIcon2x from '../../account/img/icon-close@2x.png';
import UserContext from '../../../contexts/UserContext';

interface Props {}

interface State {
  groupList: TaskGroup[];
  addGroup: boolean;
  newGroupName: string;
}

const TodoList = (props: Props) => {
  const today = new Date().toLocaleDateString();

  const { user } = useContext(UserContext);

  const [state, setState] = useState<State>({
    groupList: user.groups ? user.groups : [],
    addGroup: false,
    newGroupName: '새 그룹 이름',
  });

  const addNewGroup = () => {
    setState({
      ...state,
      groupList: [
        ...state.groupList,
        {
          id: 0,
          title: state.newGroupName,
          tasks: [],
        },
      ],
      addGroup: false,
    });
  };

  const noGroup = (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          alignItems: 'center',
          fontFamily: 'NotoSans-Regular',
          color: '#707070',
          fontSize: '0.9em',
        }}
      >
        새 그룹을 추가해주세요!
      </p>
    </div>
  );

  return (
    <div className="wrapper-todolist">
      <div className="title-todolist">
        <p>TO DO LIST</p>
        <p style={{ fontFamily: 'NotoSans', marginTop: 2 }}>{today}</p>
      </div>
      <div className="background-todolist">
        {state.groupList.length > 0 &&
          state.groupList.map((group, index) => (
            <TodoGroup group={group} key={index} />
          ))}
        {!state.addGroup && state.groupList.length === 0 && noGroup}
        {state.addGroup && (
          <div className="newgroup-modal">
            <input
              className="newgroup-name-input"
              placeholder="새 그룹 이름"
              onChange={(e) => {
                setState({ ...state, newGroupName: e.target.value });
              }}
            ></input>
            <button className="newgroup-add-button" onClick={addNewGroup}>
              추가
            </button>
            <button
              className="newgroup-quit-button"
              onClick={() => {
                setState({ ...state, addGroup: false });
              }}
            >
              <img
                className="icon-close"
                alt="close_icon"
                src={closeIcon}
                srcSet={`${closeIcon} 1x, ${closeIcon2x} 2x`}
                style={{
                  width: '0.9em',
                }}
              />
            </button>
          </div>
        )}
        <div className="addgroup-button-wrapper">
          <button
            className="addgroup-button"
            onClick={() => {
              setState({ ...state, addGroup: true });
            }}
          >
            그룹 추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
