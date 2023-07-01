import Image from 'next/image'
import React from 'react'
import { ImageStyled } from './imageStyled'
const MyImage = ({src, alt, width, height, classname = '' }) => {
  return (
    <ImageStyled>
      {!width && !height &&
        <Image src={src} alt={alt} fill={true} className={classname}/>
        }
      {width && height &&
        <Image src={src} alt={alt} width={width} height={height} className={classname}/>
      }  
    </ImageStyled>
  )
}

export default MyImage