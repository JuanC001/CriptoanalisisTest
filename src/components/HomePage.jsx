import React, { useContext } from 'react'
import { Container, Form, Tabs, Tab } from 'react-bootstrap'
import { TextCard } from './TextCard'
import './HomePage.css'
import { Toolbar } from './Toolbar'
import { FieldCard } from './FieldCard'
import { useForm } from './Hooks/useForm'
import { CypherContext } from './Context/CypherContext'
import { CypherTab } from './CypherTab'
import { DecypherTab } from './DecypherTab'

export const HomePage = () => {



    return (
        <div className='background'>
            <div className='containerHome h-100'>
                <Container className='container pt-4 pb-3'>
                    <Tabs defaultActiveKey={'cifrar'}>
                        <Tab title="Cifrar" eventKey={'cifrar'}>
                            <CypherTab />
                        </Tab>
                        <Tab title="Decifrar" eventKey={'decifrar'}>
                            <DecypherTab />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        </div>
    )
}