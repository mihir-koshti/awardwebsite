import React from 'react'
import { MarketStyled } from './marketStyled'
import { Col, Container, Row } from 'react-bootstrap'
import MarketCard from './marketCard'
import { MarketImage1, MarketImage2, MarketImage3 } from '@/asset'
import { BsArrowRight } from 'react-icons/bs'
import TextWithUnderline from '@/common/textWithUnderline/textWithUnderline'

const Market = () => {
    const marketdata = [
        {
            title: 'Digital Product', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam adipiscing. Consequat semper viverra nam libero justo laoreet sit amet. Amet luctus venenatis lectus magna fringilla. Pellentesque massa placerat duis ultricies lacus sed.',
            imageurl: MarketImage3.src, byWhom: 'Omar'
        },
        {
            title: 'Digital Product', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam adipiscing. Consequat semper viverra nam libero justo laoreet sit amet. Amet luctus venenatis lectus magna fringilla. Pellentesque massa placerat duis ultricies lacus sed. ',
            imageurl: MarketImage1.src, byWhom: 'awwwards'
        },
        {
            title: 'Digital Product', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam adipiscing. Consequat semper viverra nam libero justo laoreet sit amet. Amet luctus venenatis lectus magna fringilla. Pellentesque massa placerat duis ultricies lacus sed.',
            imageurl: MarketImage2.src, byWhom: 'awwward'
        },
    ]
    return (
        <MarketStyled>
                <div className='my-5 spacing'>
                <Container>
                    <div>
                        Market
                    </div>
                    <Row className='my-3'>
                        <Col lg={6} sm={12} className='font-weight-800'>
                            <h1>A curated marketplace <br></br> for digital & physical product.</h1>
                        </Col>
                    </Row>
                    <Row>
                        {marketdata.map((data, index) => {
                            return (
                                <Col key={index} lg={6} xl={4} md={6} xs={12} className={index > 1 ? 'display-mobile' : ''}>
                                    <MarketCard data={data} />
                                </Col>
                            )
                        })

                        }
                    </Row>
                        <div className='d-flex content my-5'>
                            Browse specially curated products &nbsp;
                            <BsArrowRight />
                            <TextWithUnderline text={'View Market'} className={'ViewProduct'} />
                        </div>
                </Container>
        </div>
            </MarketStyled>
    )
}

export default Market