import React from 'react'
import { TextStyled } from './textStyled'
import MyImage from '@/common/image/image'

const TextWithUnderline = ({text, className}) => {
  return (
    <TextStyled>
    <div className={`link-underlined ${className ? className : ''}`}>
        <strong>
        {text}
        </strong>
    </div>
    </TextStyled>
  )
}
export default TextWithUnderline