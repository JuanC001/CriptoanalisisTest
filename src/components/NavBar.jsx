import React, { useContext } from 'react'
import { Button, Container, Form, Nav, NavItem, Navbar } from 'react-bootstrap'
import Logo from "/icon.png"

import './NavBar.css'
import { UserContext } from './Context/UserContext'

export const NavBar = () => {

    const { onCloseSession } = useContext(UserContext)

    return (
        <>
            <Navbar variant='dark' className='navbar'>

                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="logo" width={25} height={25} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className='me-auto'>
                        <Nav.Link active>Inicio</Nav.Link>
                    </Nav>
                    <Button variant='outline-light' onClick={onCloseSession}><strong>Cerrar Sesión</strong></Button>

                </Container>

            </Navbar>

        </>
    )
}
