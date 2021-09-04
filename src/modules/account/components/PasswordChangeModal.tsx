import React from 'react';
import InputField from './InputField';

interface Props {
  password: string;
  passwordHandler: () => void;
  passwordCheck?: string;
  passwordCheckHandler?: () => void;
}

const PasswordChangeModal = (props: Props) => {
  return (
    <div>
      <div>
        <InputField
          name={'현재 비밀번호'}
          value={props.password}
          changeHandler={props.passwordHandler}
        ></InputField>
        {props.passwordCheck && props.passwordCheckHandler && (
          <InputField
            name={'새 비밀번호'}
            value={props.passwordCheck}
            changeHandler={props.passwordCheckHandler}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordChangeModal;
