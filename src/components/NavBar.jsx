import React from 'react'
import { Container, Nav, NavItem, Navbar } from 'react-bootstrap'
import Logo from "../assets/React.webp"

export const NavBar = () => {
    return (
        <Navbar bg="primary" variant='dark'>

            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="logo" width={25} height={25}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className='me-auto'>
                    <Nav.Link active>Inicio</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
