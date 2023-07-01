import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { NewsAndUpdatesStyled } from './NewsAndUpdatesStyled';
import ListCard from '@/common/listCard/ListCard';
import Feature from '../feature/feature';

const NewAndUpdates = () => {
const newsArray =[ 
    {title: 'Element of the Day', description: 'Project Gallery', badge :true},
    {title: 'Element of the Day', description: 'Project Gallery', badge :false},
    {title: 'Element of the Day', description: 'Project Gallery', badge :true},
    {title: 'Element of the Day', description: 'Project Gallery', badge :false}
]
const newsArray2 =[ 
    {title: 'Agency', description: 'eDesgin Interactive', badge :true},
    {title: 'Studio', description: 'Rezo Zero', badge :true},
    {title: 'Element of the Day', description: 'Project Gallery', badge :true},
    {title: 'Element of the Day', description: 'Project Gallery', badge :false}
]
    return (
        <div className='my-5'>
            <NewsAndUpdatesStyled>
                <Container>
                    <div>
                        News and Updates
                    </div>
                    <Row className='my-3'>
                        <Col lg={6} sm={12} className='font-weight-800'>
                            <h1>Follow whats brand <br></br> new in digital design.</h1>
                        </Col>
                        <Col className='secondCol' lg={6} sm={12}>
                            <div>Dont miss the <strong>latest</strong> happenings on <strong>awwwards</strong>.</div>
                        </Col>
                    </Row>
                    <Row className='my-5'>
                        <Col lg={4} md={6} sm={12}>
                        <div className='py-5 font-weight-bold blockTitle'>w.news</div>
                        {newsArray.map((news, index) => {
                            return (
                                <ListCard data={news} key={index}/>
                            )
                        })}
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                        <div className='py-5 font-weight-bold blockTitle'>w.creators - close to you</div>
                        {newsArray2.map((news, index) => {
                            return (
                                <ListCard data={news} key={index}/>
                            )
                        })}
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <div className='py-5 borderVisi font-weight-bold blockTitle'>Feature</div>
                            <Feature />
                        </Col>
                    </Row>
                </Container>
            </NewsAndUpdatesStyled>
        </div>
    )
}
export default NewAndUpdates;