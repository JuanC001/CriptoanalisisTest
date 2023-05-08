import React, { useCallback, useEffect, useState } from 'react'
import { Button, Card, FloatingLabel, Form, Stack } from 'react-bootstrap'

import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import { useLocalStore } from '../Hooks/useLocalStore'
import ReCAPTCHA from 'react-google-recaptcha'
import { useAuth } from '../Hooks/useAuth'



export const LoginPage = () => {

    const navigate = useNavigate()

    const captcha = React.createRef();

    const { check } = useAuth()

    const [object, setObject] = useLocalStore('utrser', {})
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const [verified, setVerified] = useState(false)
    const [disabledLogin, setdisabledLogin] = useState(true)

    const [timer, setTimer] = useState(0)

    const verifyHour = () => {
        try {
            const hourBlock2 = object.date
            const actualdate = new Date()

            const hourBlock = new Date(hourBlock2)

            if (actualdate <= hourBlock) {

                setdisabledLogin(true)
                return
            } else {
                setdisabledLogin(false)
                return
            }
        } catch (e) {

            console.log(e)

        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            verifyHour()
            setTimer(1000)
        }, timer)
        return () => clearInterval(interval)
    })

    useEffect(() => {

        if (object.tries === undefined) {
            setdisabledLogin(false)
            return
        }

        if (object.tries % 3 === 0) {

            setVerified(false)
            try {
                captcha.current.reset()
            } catch (e) {
                console.log(e)
            }

        }

    }, [object])

    const handleSubmit = (e) => {

        e.preventDefault();

        const tries = object.tries ? object.tries + 1 : 1;

        if (!verified) {
            alert('completa el captcha')
            return
        }

        const logged = check(email, pass);

        if (!logged) {
            let date = new Date()

            if (object.tries % 3 === 0) {

                date.setMinutes(date.getMinutes() + object.tries)

            }

            console.log(date.toLocaleTimeString())
            console.log(object.tries)
            setObject({
                tries,
                date
            })
            return
        }

        window.localStorage.removeItem('utrser')
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
                                            <Form.Control type="user" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingPassword" label="Password">
                                            <Form.Control type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} />
                                        </FloatingLabel>

                                        <Button type='submit' disabled={disabledLogin}>Iniciar Sesion</Button>
                                    </Stack>
                                </form>

                                <div className="container container2">
                                    <ReCAPTCHA sitekey='6LeeQ_ElAAAAADfasP35odXIFM6i7OOtfVGReDQf' onChange={e => setVerified(true)} ref={captcha} />
                                </div>

                            </Card.Body>
                        </Card>

                    </div>
                </div>

            </div>

        </>
    )
}
