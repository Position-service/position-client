import React, { useState } from 'react';
import '../css/TodoGroup.css';
import arrow from '../img/arrow.png';
import arrow2x from '../img/arrow@2x.png';
import editIcon from '../img/edit-icon.png';
import editIcon2x from '../img/edit-icon@2x.png';
import deleteIcon from '../img/delete-icon.png';
import deleteIcon2x from '../img/delete-icon@2x.png';
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
  itemList: TaskItem[];
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
          onMouseEnter={() => setState({ ...state, showOption: true })}
          onMouseLeave={() => setState({ ...state, showOption: false })}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setState({ ...state, clear: !state.clear });
            }
          }}
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
              <img
                className="item-edit-icon"
                onClick={() => {
                  setState({ ...state, onEdit: true, showOption: false });
                }}
                alt="edit_icon"
                src={editIcon}
                srcSet={`${editIcon} 1x, ${editIcon2x} 2x`}
                style={{ marginRight: 5 }}
              />
              <img
                className="item-delete-icon"
                onClick={deleteHandler}
                alt="delete_icon"
                src={deleteIcon}
                srcSet={`${deleteIcon} 1x, ${deleteIcon2x} 2x`}
              />
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
    itemList: groupProps.group.itemList,
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
            <img
              className="edit-icon"
              onClick={() => {
                setState({ ...state, onEdit: false, groupName: state.newName });
              }}
              alt="edit_icon"
              src={editIcon}
              srcSet={`${editIcon} 1x, ${editIcon2x} 2x`}
              style={{
                marginLeft: 5,
              }}
            />
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
                    className="group-edit-icon"
                    onClick={() => {
                      setState({ ...state, onEdit: true, showOption: false });
                    }}
                    alt="edit_icon"
                    src={editIcon}
                    srcSet={`${editIcon} 1x, ${editIcon2x} 2x`}
                    style={{
                      marginRight: 7,
                    }}
                  />
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
          {state.itemList.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}
          <button
            className="todoitem-add-button"
            onClick={() => {
              setState({
                ...state,
                itemList: [
                  ...state.itemList,
                  {
                    id: 0,
                    title: '새 할 일',
                    isDone: false,
                  },
                ],
              });
            }}
          >
            할 일 추가하기 +
          </button>
        </>
      )}
    </div>
  );
};

export default TodoGroup;
