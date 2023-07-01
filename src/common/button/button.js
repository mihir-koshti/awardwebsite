import React from 'react'
import { Button } from 'react-bootstrap'
import { ButtonStyled } from './buttonStyled';

 const MyButton = ({variant, className, title}) => {
  return (
    <ButtonStyled>
      <Button variant={variant} className={'defaultButton ' + className }>{title}</Button>
    </ButtonStyled>
  )
}
export default MyButton;