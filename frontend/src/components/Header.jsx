import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {FaUser, FaHeart, } from 'react-icons/fa'
import { Profile } from 'react';

const Header = () => {
  const {userInfo} = useSelector((state) => state.auth);

  const logoutHandler=()=>{
    console.log('logout');
  }

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

      <LinkContainer to="/">
        <Navbar.Brand>
          My Favorite Foods
        </Navbar.Brand>
      </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <LinkContainer to="/home">
            <Nav.Link href="#home">
                Home
              </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/recipes">
            <Nav.Link>
                Recipes
              </Nav.Link>
          </LinkContainer>


            <NavDropdown title="User" id="basic-nav-dropdown">
              
            <LinkContainer to='/profile'>
              <NavDropdown.Item>
                <FaUser/> Profile
              </NavDropdown.Item>
            </LinkContainer>
              
              <LinkContainer to="/favorites">
              <NavDropdown.Item>
                <FaHeart/>  Favorites
              </NavDropdown.Item>
            </LinkContainer>

              <NavDropdown.Divider />
            {userInfo?(
              <NavDropdown.Item onClick={logoutHandler}>
                Log out
              </NavDropdown.Item>
            ):(
              <LinkContainer to="/login">
              <NavDropdown.Item>
                Sign in
              </NavDropdown.Item>
            </LinkContainer>
            )}
            {/* <LinkContainer to="/login">
              <NavDropdown.Item>
                Log out
              </NavDropdown.Item>
            </LinkContainer> */}
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header

