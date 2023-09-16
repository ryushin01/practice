import React from 'react';
import Input from '../Input/Input';
import './InputWrap.scss';

const InputWrap = props => {
  const {
    className = 'input',
    placeholder,
    type,
    disabled,
    name,
    emailValid = false,
  } = props;

  return emailValid ? (
    <div className={`input-wrap ${className}`}>
      <Input
        className={className}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        name={name}
        emailValid={emailValid}
      />
      <p>비밀번호가 일치하지 않습니다.</p>
    </div>
  ) : (
    <div className={`input-wrap ${className}`}>
      <Input
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        name={name}
        emailValid={emailValid}
      />
    </div>
  );
};

export default InputWrap;
