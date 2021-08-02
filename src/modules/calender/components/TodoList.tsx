import React from 'react';
import '../css/TodoList.css';
import TodoGroup from './TodoGroup';

interface Props {}

const TodoList = (props: Props) => {
  const today = new Date();
  return (
    <div className="wrapper-todolist">
      <div className="title-todolist">
        <p>TO DO LIST</p>
        <p style={{ fontFamily: 'NotoSans', marginTop: 2 }}>2021.08.02</p>
      </div>
      <div className="background-todolist">
        <TodoGroup groupName={'test'} itemList={['']} />
      </div>
    </div>
  );
};

export default TodoList;
