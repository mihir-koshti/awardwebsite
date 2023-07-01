import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, NavLink, Navbar, NavbarBrand } from 'react-bootstrap';
import { HeaderStyled } from './headerStyled';
import MyButton from '@/common/button/button';
import { VscSearch } from "react-icons/vsc";


const Header = () => {
  const menu = ['inspiration', 'Blogs', 'Courses', 'Directory']
  return (
    <HeaderStyled>
      <Navbar expand="lg" className="bg-body-tertiary Navbar">
      <Container>
        <Navbar.Brand href="#" className='font-weight-bold'>W.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',width: '-webkit-fill-available' }}
            navbarScroll
          >
          <Form className="d-flex searchBox">
            <div className='d-flex align-items-center mx-3'>
            <VscSearch accentHeight={20} width={20}/>
            </div>
            <Form.Control
              type="search"
              placeholder="Search in inspiration"
              className="me-2 searchInput"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
            <NavDropdown title="Inspiration" id="navbarScrollingDropdown" className='Instudropdown mx-3'>
               {menu.map((data, i) => {
                return <NavDropdown.Item href={`#action${data}`} key={i}>{data}</NavDropdown.Item>

              })}
            </NavDropdown>
          </Form>
           <NavLink className='navLink'>Login </NavLink>
           <NavLink className='navLink'>Sign up </NavLink>
           {/* <div> */}

           <MyButton variant={'dark'} title={'Be Pro'} className={'buttonSize mx-2'}/>

           <MyButton variant={'outline-dark'} title={'Submit Website'} className={'submitButton buttonSize mx-2'}/>
           {/* </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </HeaderStyled>
  )
}

export default Header;
