import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FooterStyled } from './FooterStyled';
import Link from 'next/link';
import MyButton from '@/common/button/button';
import TextWithUnderline from '@/common/textWithUnderline/textWithUnderline';

const Footer = () => {
  return (
    <div>
      <FooterStyled>

        <Container>

          <div className='font-weight-800 mainfont'>
            W.
          </div>
          <Row className='my-5'>
            <Col lg={2} md={6} xs={6}>
              <Link href={'/'} className='LinkText'>Website</Link>
              <Link href={'/'} className='LinkText'>Collection</Link>
            </Col>
            <Col lg={2} md={6} xs={6}>
              <Link href={'/'} className='LinkText'>Academy</Link>
              <Link href={'/'} className='LinkText'>Jobs</Link></Col>
            <Col lg={2} md={6} xs={6}>
              <Link href={'/'} className='LinkText'>Directory</Link>
              <Link href={'/'} className='LinkText'>Conference</Link></Col>
            <Col lg={2} md={6} xs={6}>
              <Link href={'/'} className='LinkText'>FAQ</Link>
              <Link href={'/'} className='LinkText'>About Us</Link>
              <Link href={'/'} className='LinkText'>Contact Us</Link>
            </Col>
            <Col lg={4} md={12} xs={12}>
              <div>
                <div className='d-inline'>
                  Next Conference
                  <TextWithUnderline text={'India'} />
                </div>
              </div>
            </Col>
          </Row>
          <div className='borderClass'></div>
          <div className='my-5'>

            <Row>
              <Col lg={5} md={12}>
                <Row>
                  <Col lg={3} md={3} xs={3}>
                    <Link href={'/'} className='linkFooter'>Cookie policy</Link>
                  </Col><Col lg={3} md={3} xs={3}>
                    <Link href={'/'} className='linkFooter'>Legal Terms</Link>
                  </Col><Col lg={3} md={3} xs={3}>
                    <Link href={'/'} className='linkFooter'>Privacy Policy</Link>
                  </Col>
                </Row>
              </Col>
              <Col lg={7} md={12} xs={12}>
                <Row>
                  <Col lg={2} md={2} xs={3}>
                    <div className='linkFooter font-weight-bold'>Connect : </div>
                  </Col>
                  <Col lg={2} md={2} xs={3}>
                    <Link href={'/'} className='linkFooter'>Instagram</Link>
                  </Col>
                  <Col lg={2} md={2} xs={3}>
                    <Link href={'/'} className='linkFooter'>LinkedIn</Link>
                  </Col>
                  <Col lg={2} md={2} xs={3}>
                    <Link href={'/'} className='linkFooter'>Twitter</Link>
                  </Col>

                  <Col lg={2} md={2} xs={3}>
                    <Link href={'/'} className='linkFooter'>Facebook</Link>
                  </Col>
                  <Col lg={2} md={2} xs={3}>
                    <Link href={'/'} className='linkFooter'>YouTube</Link>
                  </Col>

                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </FooterStyled>
    </div>
  )
}

export default Footer;