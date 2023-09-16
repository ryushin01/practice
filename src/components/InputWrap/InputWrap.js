import React from 'react';
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
    onChange,
  } = props;

  return (
    <div className={`${className}`}>
      <Input
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        name={name}
        userInfoValid={userInfoValid}
        onChange={onChange}
      />
      {name === 'email' && userInfoValid === 'id-error' && (
        <p>이메일 형식이 올바르지 않습니다.</p>
      )}
      {name === 'password' && userInfoValid === 'pw-error' && (
        <p>비밀번호는 10자리 이상입니다.</p>
      )}
      {userInfoValid === 'success' && <p>완료 되었습니다.</p>}
    </div>
  );
};

export default InputWrap;
