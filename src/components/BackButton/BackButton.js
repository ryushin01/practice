import React from 'react';
import Button from '../Button/Button';

const BackButton = () => {
  const handleBackButton = () => {
    history.go(-1);
  }
  
  return(
    <>
      <Button onClick={handleBackButton}>
        <img src={/images/Vector.png>} alt="뒤로가기" /> 
        뒤로
      </Button>
    </>

  )
}

export default BackButton;