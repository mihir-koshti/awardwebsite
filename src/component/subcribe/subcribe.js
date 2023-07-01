import { Banner2, Member, Submit } from '@/asset'
import MyButton from '@/common/button/button'
import MyImage from '@/common/image/image'
import React from 'react'
import { SubcribeStyled } from './subcribeStyled'
import { Col, Container, Row } from 'react-bootstrap'

const Subcribe = () => {
    return (
        <SubcribeStyled>
            <div className='spacing'>
            <Container>
                <Row>
                    <Col xl={6} lg={12} md={12} xs={12}>
                        <div className='justify-content-center d-flex m-4 mainHover'>
                            <MyImage classname={'bannerImage'} src={Submit.src} alt={'Banner'} />
                            <div className='displayContainer'>
                                Share your Work
                                <h1 className='mainheading my-3'>
                                    Submit your website for visibility and recognition
                                </h1>
                                <MyButton title={'Submit Website'} variant={'outline-light'} className={'submitButton my-5'}/>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div className='justify-content-center d-flex m-4 mainHover'>
                            <MyImage classname={'bannerImage'} src={Member.src} alt={'Banner'} />
                            <div className='displayContainer'>
                                <div>
                                    Be a Member
                                </div>

                                <h1 className='mainheading my-3'>
                                Get access to special pro features                                </h1>
                                <MyButton title={'Be Pro'} variant={'outline-light'} className={'submitButton my-5'}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </SubcribeStyled>
    )
}

export default Subcribe