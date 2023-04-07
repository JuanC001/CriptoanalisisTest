import React, { useContext } from 'react'
import { Card, Form } from 'react-bootstrap'
import { CypherContext } from './Context/CypherContext'

export const TextCard = ({ titleCard, valueCard, onChange, disabled, name }) => {

  return (
    <Card>
      <Card.Header>
        <h6>{titleCard}</h6>
      </Card.Header>
      <Card.Body>

        <Form.Control as="textarea" rows={4} value={valueCard} onChange={onChange} disabled={disabled} name={name}></Form.Control>

      </Card.Body>
    </Card>
  )
}
