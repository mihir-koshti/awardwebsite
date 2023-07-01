import React from 'react'
import MyImage from '../../common/image/image'
import { AcdameyPhoto1, AvatarImage, Banner2, MarketImage1, MarketImage2 } from '../../asset'
import { BannerStyled } from './bannerStyled'
import Marquee from 'react-fast-marquee'
import Slider from 'react-slick'
import SliderData from '@/common/sliderData/sliderData'
import MyButton from '../../common/button/button'
import TextWithUnderline from '@/common/textWithUnderline/textWithUnderline'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
  const marqueeData = ['IKEA ,"Red de Deseos" ', ' IKEA ,"Red de Deseos" '];
  const Text = [
    { name: 'MRM Spain', imagesrc: AvatarImage.src },
    { name: 'estudio/nk', imagesrc: AcdameyPhoto1.src },
    { name: 'Mach Studio', imagesrc: MarketImage2.src }]
  return (
    <BannerStyled>
      <Container>
        <div className=''>
          <span className='bannerTitle'>SITE OF THE DAY</span>
          <div>
            <Marquee className='marquee'>
              {marqueeData.map((item, index) => {
                return (
                  <>
                    <strong key={index}>{item}</strong>
                    - Site of the day
                    &nbsp;
                  </>
                )
              })}
            </Marquee>
          </div>
          <div className='mainHover'>

            <div className='justify-content-center d-flex m-4 mainHover'>
              <MyImage classname={'bannerImage'} src={Banner2.src} alt={'Banner'} />
              <div className='displayContainer'>
                <MyButton variant={'outline-light'} className={'button'} title={'Explore SOTD'} />
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-center NameContent'>
            {Text.map((item, i) => {
              return (
                <div key={i} className='d-flex'>
                  <Row>
                    <Col lg={2} className='imageCol'>
                      <MyImage src={item.imagesrc} alt={'avatar' + i} width={20} height={20} classname='roundedImage img-circle' />
                    </Col>
                    <Col lg={10} className='display-desktop'>
                      <TextWithUnderline key={i} text={item?.name} />
                    </Col>
                  </Row>
                </div>
              )
            })

            }
          </div>
        </div></Container>
    </BannerStyled>
  )
}
export default Banner