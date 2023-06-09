import React from 'react'
import { Card, Form, Stack } from 'react-bootstrap'

export const Frecuencies = ({ titleCard, label, valueCard, onChange, disabled, name, percentage }) => {
    return (
        <Card>
            <Card.Header>
                <h6>{titleCard}</h6>
            </Card.Header>
            <Card.Body>

                <Stack direction='horizontal' gap={3}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control as="input" value={valueCard} onChange={onChange} disabled={true} name={name}></Form.Control>
                    {
                        percentage && <Form.Label><strong>{percentage}%</strong></Form.Label>
                    }
                </Stack>

            </Card.Body>
        </Card>
    )
}
