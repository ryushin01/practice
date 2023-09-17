import React from 'react';
import './Button.scss';

const Button = props => {
  const handleClick = () => {
    props.onClick();
  };
  const {
    className = 'btn',
    type = 'button',
    shape,
    size,
    name,
    onClick,
    disabled,
  } = props;

  return (
    <button
      className={className}
      type={type}
      shape={shape}
      size={size}
      name={name}
      onClick={handleClick}
      disabled={disabled}
    />
  );
};

export default Button;

// props

// className = 'btn'
// type = 성질 (button, submit)
// shape = 모양 (outline, fill)
// size = 크기 (large, middle, small)
// name
// onClick = {function}
// disabled = {boolean}
