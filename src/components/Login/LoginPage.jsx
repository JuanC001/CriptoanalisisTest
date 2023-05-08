import React from 'react'
import { Button, Card, FloatingLabel, Form, Stack } from 'react-bootstrap'

import './LoginPage.css'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault();
        navigate('/Cifrado')


    }

    return (
        <>

            <div className="loginBackground">

                <div className="textContainer">
                    <span className='textMain'>
                        ¡Hola Mundo!
                    </span>
                </div>

                <div className="textContainer">
                    <span className='textMain2'>
                        ¡VECQ Q@XEs!
                    </span>
                </div>

                <div className="loginSection">
                    <div className="loginCard">

                        <Card className='cardPart'>
                            <Card.Header>
                                Iniciar Sesión
                            </Card.Header>
                            <Card.Body>
                                <form onSubmit={handleSubmit}>

                                    <Stack gap={4} className='my-4'>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control type="user" placeholder="name@example.com" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingPassword" label="Password">
                                            <Form.Control type="password" placeholder="Password" />
                                        </FloatingLabel>
                                        <Button type='submit'>Iniciar Sesion</Button>
                                    </Stack>
                                </form>

                            </Card.Body>
                        </Card>

                    </div>
                </div>

            </div>
        </>
    )
}
