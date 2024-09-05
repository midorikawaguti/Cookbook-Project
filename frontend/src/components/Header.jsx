import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
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

            <NavDropdown title="Profile" id="basic-nav-dropdown">
              
            <LinkContainer to="/action/3.1">
              <NavDropdown.Item>
                Settings
              </NavDropdown.Item>
            </LinkContainer>
              
            <LinkContainer to="/action/3.2">
              <NavDropdown.Item>
                Favorites
              </NavDropdown.Item>
            </LinkContainer>
              

              <NavDropdown.Divider />

            <LinkContainer to="/action/3.3">
              <NavDropdown.Item>
                Log out
              </NavDropdown.Item>
            </LinkContainer>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header

