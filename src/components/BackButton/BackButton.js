import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  }
  
  return(
    <>
      <Button onClick={handleBackButton}>
        <img src={/images/Back_arrow.png>} alt="뒤로가기" /> 
        뒤로
      </Button>
    </>

  )
}

export default BackButton;