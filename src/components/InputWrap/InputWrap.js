import React from 'react';
import { ReactComponent as Caption } from '../../svg/ic_caption.svg';
import { ReactComponent as Done } from '../../svg/ic_done.svg';
import Input from '../Input/Input';
import './InputWrap.scss';

const InputWrap = props => {
  const {
    className = 'input-wrap',
    placeholder,
    type,
    disabled,
    name,
    userInfoValid = false,
  } = props;

  return (
    <div className={`input-wrap ${className}`}>
      <label>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          userInfoValid={userInfoValid}
        />
        {name === 'email' && className === 'error' && (
          <div className="error-text">
            <Caption />
            <p>이메일 형식이 올바르지 않습니다.</p>
          </div>
        )}
        {name === 'password' && className === 'error' && (
          <div className="error-text">
            <Caption />
            <p>비밀번호는 10자리 이상입니다.</p>
          </div>
        )}

        {className === 'done' && (
          <div className="done-text">
            <Done />
            <p>완료 되었습니다.</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default InputWrap;
