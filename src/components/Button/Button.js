import React from 'react';
import './Button.scss';

const Button = props => {
  const handleClick = () => {
    props.onClick();
  };
  const {
    className = 'btn',
    type = 'submit',
    shape,
    size,
    name,
    toggle,
    disabled,
    hover,
    onClick,
  } = props;

  return (
    <button
      className={className}
      type={type}
      shape={shape}
      size={size}
      name={name}
      toggle={toggle}
      disabled={disabled}
      hover={hover}
      onClick={handleClick}
    />
  );
};

export default Button;

// props

// className = 'btn' o
// type = 성질 (button, submit) o
// shape = 모양 (outline, fill)
// size = 크기 (large, middle, small)
// name
// toggle
// disabled = 비활성화
// hover
// onClick = onClick
