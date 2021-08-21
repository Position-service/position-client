import React from 'react';
import '../css/TodoGroup.css';

interface Props {
  title: string;
  selected: boolean;
  buttonHandler: () => void;
}

const ModeButton: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <button
      className="mode-button-background"
      style={{
        backgroundColor: props.selected ? '#000000' : '#C6C6C6',
      }}
    >
      {props.title}
    </button>
  );
};

export default ModeButton;
