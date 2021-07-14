import React, { ChangeEvent } from 'react';
import './InputField.css';

interface Props {
  name: string;
  value: string;
  changeHandler: (input: string) => void;
}

const InputField: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <input
      className="input"
      value={props.value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        props.changeHandler(e.target.value);
      }}
      placeholder={props.name}
    />
  );
};

export default InputField;
