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
import { UserContext } from './Context/UserContext'

const onExit = { animation: 'end 0.5s forwards' }

export const HomePage = () => {

    const { isExit } = useContext(UserContext)

    return (
        <div className='containerx'>
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
            <div className='startAnim' style={isExit ? onExit : {}}>

            </div>
        </div>
    )
}