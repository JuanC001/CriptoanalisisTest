import React, { useContext } from 'react'
import { Button, Card, Container, Stack } from 'react-bootstrap'
import { CypherContext } from './Context/CypherContext'

export const Toolbar = () => {

    const { onDecypher, onCypher } = useContext(CypherContext)


    return (
        <Card className='mt-3'>
            <Card.Body>
                <Container style={{ textAlign: 'center', alignItems: 'center' }}>
                    <Stack direction='horizontal' gap={3}>
                        <Button onClick={onCypher}>Cifrar</Button>
                        <Button onClick={onDecypher}>Decifrar</Button>
                    </Stack>
                </Container>
            </Card.Body>
        </Card>
    )
}
