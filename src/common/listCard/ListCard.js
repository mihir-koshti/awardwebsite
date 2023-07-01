import React from 'react'
import { ListCardStyled } from './ListCardStyled'
import { Badge, Card, Col, Row } from 'react-bootstrap'
import MyImage from '../image/image'
import { AvatarImage } from '@/asset'

const ListCard = ({ data }) => {
    return (
        <div>
            <ListCardStyled>
                <Card className='Card'>
                    <Card.Body>
                        <Row>
                            <Col xl={3} lg={4} md={3} xs={3} className='col1'>
                                <MyImage src={AvatarImage.src} alt={'newsImage'} width={60} height={60} />

                            </Col>
                            <Col xl={8} lg={8} md={8} xs={8} className={'midCol'}>
                                <div className='ListTitle'>{data?.title}
                                    <div className='col1'>
                                        {data?.badge && <span className='d-flex '>
                                            <Badge bg="secondary">New</Badge>
                                        </span>}
                                    </div>
                                </div>
                                <div className='font-weight-800 Listdes'>
                                    {data?.description}
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </ListCardStyled>
        </div>
    )
}

export default ListCard