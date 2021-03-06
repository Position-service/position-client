import React, { useState } from 'react';
import '../css/TodoGroup.css';
import arrow from '../img/arrow.png';
import arrow2x from '../img/arrow@2x.png';
import editIcon from '../img/edit-icon.png';
import editIcon2x from '../img/edit-icon@2x.png';
import deleteIcon from '../img/delete-icon.png';
import deleteIcon2x from '../img/delete-icon@2x.png';
import addIcon from '../img/add-icon.png';
import { TaskGroup, TaskItem } from '../../../types/Task';

interface GroupProps {
  group: TaskGroup;
}

interface GroupState {
  showItem: boolean;
  showOption: boolean;
  onEdit: boolean;
  groupName: string;
  newName: string;
  tasks: TaskItem[];
  addItem: boolean;
}

interface ItemProps {
  item: TaskItem;
  onEdit?: boolean;
}

interface ItemState {
  showOption: boolean;
  onEdit: boolean;
  clear: boolean;
  itemName: string;
  newName: string;
}

const TodoItem = (itemProps: ItemProps) => {
  const [state, setState] = useState<ItemState>({
    showOption: false,
    onEdit: false,
    clear: false,
    itemName: itemProps.item.title,
    newName: itemProps.item.title,
  });

  const deleteHandler = () => {
    const id = itemProps.item.id;
  };
  return (
    <div className="todoitem-background">
      <div
        className="todoitem-checkbox"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setState({ ...state, clear: !state.clear });
          }
        }}
        style={{
          backgroundColor: state.clear ? '#848484' : 'transparent',
        }}
      />
      {state.onEdit ? (
        <>
          <input
            className="todoitem-input-name"
            placeholder={state.itemName}
            onChange={(e) => {
              setState({ ...state, newName: e.target.value });
            }}
          />
          <button
            className="todoitem-edit-name-button"
            onClick={() => {
              setState({ ...state, onEdit: false, itemName: state.newName });
            }}
          >
            Edit
          </button>
        </>
      ) : (
        <div
          className="todoitem-name"
          onDoubleClick={() => {
            setState({ ...state, onEdit: true });
          }}
          onMouseEnter={() => setState({ ...state, showOption: true })}
          onMouseLeave={() => setState({ ...state, showOption: false })}
          style={{
            textDecorationLine: state.clear ? 'line-through' : 'none',
            backgroundColor: state.showOption ? '#EBEBEB' : 'transparent',
          }}
        >
          {state.itemName}
          {state.showOption && (
            <div
              className="todoitem-button"
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <div className="back-delete-icon">
                <img
                  className="item-delete-icon"
                  onClick={deleteHandler}
                  alt="delete_icon"
                  src={deleteIcon}
                  srcSet={`${deleteIcon} 1x, ${deleteIcon2x} 2x`}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const TodoGroup = (groupProps: GroupProps) => {
  const [state, setState] = useState<GroupState>({
    showItem: true,
    showOption: false,
    onEdit: false,
    groupName: groupProps.group.title,
    newName: groupProps.group.title,
    tasks: groupProps.group.tasks,
    addItem: false,
  });

  const deleteHandler = () => {
    const id = groupProps.group.id;
  };
  return (
    <div className="todogroup-background">
      <div className="todogroup-title">
        {state.onEdit ? (
          <>
            <input
              className="todogroup-input-name"
              placeholder={state.groupName}
              onChange={(e) => {
                setState({ ...state, newName: e.target.value });
              }}
            />
            <button
              className="edit-button"
              onClick={() => {
                setState({ ...state, onEdit: false, groupName: state.newName });
              }}
              style={{
                marginLeft: 7,
              }}
            >
              Edit
            </button>
          </>
        ) : (
          <>
            <img
              alt="arrow img"
              onClick={() => {
                setState({ ...state, showItem: !state.showItem });
              }}
              src={arrow}
              srcSet={`${arrow} 1x, ${arrow2x} 2x`}
              style={{
                marginRight: 10,
                marginTop: 3,
                transform: `rotate(${state?.showItem ? 0 : 270}deg)`,
              }}
            />
            <div
              className="todogroup-option"
              onDoubleClick={() => {
                setState({ ...state, onEdit: true });
              }}
              onMouseLeave={() => setState({ ...state, showOption: false })}
              onMouseEnter={() => setState({ ...state, showOption: true })}
            >
              {state.groupName}
              {state.showOption && (
                <div
                  className="todogroup-button"
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <img
                    className="group-delete-icon"
                    onClick={deleteHandler}
                    alt="delete_icon"
                    src={deleteIcon}
                    srcSet={`${deleteIcon} 1x, ${deleteIcon2x} 2x`}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {state.showItem && (
        <>
          {state.tasks.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}

          <button
            className="todoitem-add-button"
            onClick={() => {
              setState({
                ...state,
                tasks: [
                  ...state.tasks,
                  {
                    id: 0,
                    title: '??? ??? ???',
                    isDone: false,
                  },
                ],
              });
            }}
          >
            <img src={addIcon} className="add-icon-btn" />??? ??? ????????????
          </button>
        </>
      )}
    </div>
  );
};

export default TodoGroup;
