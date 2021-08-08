import React, { useState } from 'react';
import '../css/TodoGroup.css';
import arrow from '../img/arrow.png';
import arrow2x from '../img/arrow@2x.png';

interface GroupProps {
  groupName: string;
  itemList: string[];
}

interface GroupState {
  showItem: boolean;
  showOption: boolean;
  onEdit: boolean;
  groupName: string;
  newName: string;
}

interface ItemProps {
  itemName: string;
  clear: boolean;
}

const testItemList = [];

const TodoItem = (itemProps: ItemProps) => {
  const [clear, setClear] = useState(itemProps.clear);
  return (
    <div className="todoitem-background" onClick={() => setClear(!clear)}>
      <div
        className="todoitem-checkbox"
        style={{
          backgroundColor: clear ? '#848484' : 'transparent',
        }}
      />
      <div
        className="todoitem-name"
        style={{
          textDecorationLine: clear ? 'line-through' : 'none',
        }}
      >
        {itemProps.itemName}
      </div>
    </div>
  );
};

const TodoGroup = (groupProps: GroupProps) => {
  const [state, setState] = useState<GroupState>({
    showItem: true,
    showOption: false,
    onEdit: false,
    groupName: groupProps.groupName,
    newName: groupProps.groupName,
  });
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
              className="todogroup-edit-name-button"
              onClick={() => {
                setState({ ...state, onEdit: false, groupName: state.newName });
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
              onMouseOut={() => setState({ ...state, showOption: false })}
              onMouseOver={() => setState({ ...state, showOption: true })}
            >
              {state.groupName}
              {state.showOption && (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    onClick={() => {
                      setState({ ...state, onEdit: true });
                    }}
                  >
                    Edit
                  </div>
                  <div>Del</div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {state.showItem && (
        <>
          <TodoItem itemName={'테스트하기'} clear={false} />
          <TodoItem itemName={'테스트하기'} clear={false} />
        </>
      )}
    </div>
  );
};

export default TodoGroup;
