import React from 'react'
import { Button, Card, FloatingLabel, Form, Stack } from 'react-bootstrap'

import './LoginPage.css'

export const LoginPage = () => {

    const handleSubmit = (e) => {

        e.preventDefault();
        

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

                                <Stack gap={4} className='my-4'>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
                                    <Button>Iniciar Sesion</Button>
                                </Stack>
                            </Card.Body>
                        </Card>

                    </div>
                </div>

            </div>
        </>
    )
}
