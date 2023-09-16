import React from 'react';
import './Input.scss';
const Input = props => {
  const {
    className = 'input',
    placeholder,
    type,
    disabled,
    name,
    onChange,
  } = props;

  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
