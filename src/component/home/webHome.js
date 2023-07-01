import React from 'react'
import PropTypes from 'prop-types'
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';
import Banner from '../banner/banner';
import { Container } from 'react-bootstrap';
import NewAndUpdates from '../newAndUpdates/newAndUpdates';
import Market from '../market/market';
import Academy from '../academy/academy';
import Subcribe from '../subcribe/subcribe';

const WebHome = () => {
  return (
    <>
    <Header/>
    {/* <Container> */}
    <Banner />
    <NewAndUpdates />
    <Market />
    <Academy />
    <Subcribe/>
    {/* </Container> */}
    <Footer/>
    </>
  )
}


export default WebHome;