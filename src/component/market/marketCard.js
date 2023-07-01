import { MarketImage1 } from '@/asset';
import React from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { MarketCardStyled } from './marketStyled';
import { BsArrowRight } from "react-icons/bs";


const MarketCard = ({ data }) => {
    return (
        <div className='my-4'>
            <MarketCardStyled>
                <Card className='MarketCard'>
                    <Card.Img variant="top" src={data?.imageurl ? data?.imageurl : ''} height={300} className='CardImage' />
                    <Card.Body className='py-5'>
                        <Card.Title className='font-weight-bold MarketTitle'>{data?.title}</Card.Title>
                        {data?.description && <Card.Text>{data?.description}
                        </Card.Text>}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {data?.byWhom && <ListGroup.Item className='py-3'>By <span className='font-weight-bold'>{data?.byWhom}</span></ListGroup.Item>}
                        {data?.instructor && <ListGroup.Item className='py-3'>
                            <Row>
                                <Col>
                            <span className='font-weight-bold'>Instructor</span>
                                </Col>
                                <Col>
                            <span>{data?.instructor}</span>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        }
                    </ListGroup>
                    <Card.Body className='d-inline'>
                        <Card.Link className='linkView font-weight-bold'>
                            <div className={'linkView'}>View Product</div>
                            <div className='arrow'><BsArrowRight /></div>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </MarketCardStyled>
        </div>
    )
}

export default MarketCard;