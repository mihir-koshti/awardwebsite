import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AcademyStyled } from './academyStyled'
import { AcdameyPhoto1, AcdameyPhoto2, AcdameyPhoto3 } from '@/asset'
import MarketCard from '../market/marketCard'
import { BsArrowRight } from 'react-icons/bs'
import TextWithUnderline from '@/common/textWithUnderline/textWithUnderline'

const Academy = () => {
    const Academydata = [
        {
            title: 'Building an immersive creative website form scratch without framework', imageurl: AcdameyPhoto1.src, instructor: 'Omar'
        },
        {
            title: 'Create Award Winning Animation and Interactive Design in Webflow without any framework', imageurl: AcdameyPhoto2.src, instructor: 'awwwards'
        },
        {
            title: 'Unleashing Your Best: How to achieve your goals without sacrificing your life', imageurl: AcdameyPhoto3.src, instructor: 'awwward'
        },
    ]
    return (
        <AcademyStyled>
                <div className='my-5 spacing'>

                <Container>
                    <div>
                        Academy
                    </div>
                    <Row className='my-3'>
                        <Col
                            lg={6} sm={12} className='font-weight-800'>
                            <h1>Learn from the <br></br> best instructors.</h1>
                        </Col>
                    </Row>
                    <Row>
                        {Academydata.length > 0 && Academydata.map((data, index) => {
                            return (
                                <Col key={index} lg={6} xl={4} md={6} xs={12} className={index > 1 ? 'display-mobile' : ''}>
                                    <MarketCard data={data} />
                                </Col>
                            )
                        })

                        }
                    </Row>
                    
                    <div className='d-flex content my-5'>
                            Choose from over  &nbsp; <strong>hundreds</strong> &nbsp; of courses &nbsp;
                            <BsArrowRight />
                            <TextWithUnderline text={'View Academy'} className={'ViewProduct'} />
                        </div>
                </Container>
        </div>
            </AcademyStyled>
    )
}

export default Academy