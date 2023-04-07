import React, { useEffect, useState } from 'react'
import { CypherContext } from './CypherContext'
import { useCypher } from '../Hooks/useCypher'
import { useForm } from '../Hooks/useForm'

export const CypherProvider = ({ children }) => {

    const { a, b, textoEntrada, textoEntradaCifrado, onInputChange } = useForm({
        a: '11',
        b: '3',
        textoEntrada: '',
        textoEntradaCifrado: ''
    })
    const [outputValue, setoutputValue] = useState('El Resultado Saldrá aquí')
    const [outputValueDecifrar, setoutputValueDecifrar] = useState('El Resultado Saldrá aquí')

    const { cifradoAfin, decifradoAfin } = useCypher()

    useEffect(() => {

        onCypher()

    }, [textoEntrada, a, b])


    const onCypher = () => {


        if (textoEntrada.length > 0) {
            setoutputValue(cifradoAfin(textoEntrada, a, b))
        } else {
            setoutputValue('El Resultado Saldrá aquí')
        }

    }

    const onDecypher = () => {

        if (textoEntradaCifrado.length > 0) {
            setoutputValueDecifrar(decifradoAfin(textoEntradaCifrado))
        }else{
            setoutputValueDecifrar('El resultado saldra aquí')
        }

    }

    return (
        <CypherContext.Provider value={
            {
                a,
                b,
                textoEntrada,
                onInputChange,
                onCypher,
                onDecypher,
                outputValue,
                textoEntradaCifrado,
                outputValueDecifrar
            }
        }>
            {children}
        </CypherContext.Provider>
    )
}
