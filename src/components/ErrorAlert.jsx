import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap'
import { CypherContext } from './Context/CypherContext'

export const ErrorAlert = () => {

    const { error } = useContext(CypherContext)


    return (
        <>

            {
                error && <Alert variant='danger'>
                    <Alert.Heading>Whoops! acaba de ocurrir un error...</Alert.Heading>
                    <p>

                        Recuerda que A y B deben coincidir con almenos estos numero: 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26.
                    </p>
                    El decifrado a continuacion <strong>NO SE PODRÁ DECIFRAR AUTOMATICAMENTE</strong>
                    <p></p>
                </Alert>

            }

        </>
    )
}
