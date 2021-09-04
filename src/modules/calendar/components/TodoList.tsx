import React, { useState } from 'react';
import { TaskGroup } from '../../../types/Task';
import '../css/TodoList.css';
import TodoGroup from './TodoGroup';
import closeIcon from '../../account/img/icon-close.png';
import closeIcon2x from '../../account/img/icon-close@2x.png';

interface Props {}

interface State {
  groupList: TaskGroup[];
  addGroup: boolean;
  newGroupName: string;
}

const TodoList = (props: Props) => {
  const today = new Date().toLocaleDateString();

  const testItemList = [
    { id: 1, title: '수정하기', isDone: false },
    { id: 2, title: '개발하기', isDone: false },
  ];

  const testGroupList = [
    {
      id: 10,
      title: '그룹',
      itemList: testItemList,
    },
  ];

  const [state, setState] = useState<State>({
    groupList: testGroupList,
    addGroup: false,
    newGroupName: '새 그룹 이름',
  });

  return (
    <div className="wrapper-todolist">
      <div className="title-todolist">
        <p>TO DO LIST</p>
        <p style={{ fontFamily: 'NotoSans', marginTop: 2 }}>{today}</p>
      </div>
      <div className="background-todolist">
        {state.groupList.map((group, index) => (
          <TodoGroup group={group} />
        ))}
        {state.addGroup && (
          <div className="newgroup-modal">
            <input
              className="newgroup-name-input"
              placeholder="새 그룹 이름"
              onChange={(e) => {
                setState({ ...state, newGroupName: e.target.value });
              }}
            ></input>
            <button
              className="newgroup-add-button"
              onClick={() => {
                setState({
                  ...state,
                  groupList: [
                    ...state.groupList,
                    {
                      id: 0,
                      title: state.newGroupName,
                      itemList: [],
                    },
                  ],
                  addGroup: false,
                });
              }}
            >
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
