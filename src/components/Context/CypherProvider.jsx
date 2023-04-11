import React, { useEffect, useState } from 'react'
import { CypherContext } from './CypherContext'
import { useCypher } from '../Hooks/useCypher'
import { useForm } from '../Hooks/useForm'

export const CypherProvider = ({ children }) => {

    const { a, b, textoEntrada, textoEntradaCifrado, onInputChange } = useForm({
        a: '11',
        b: '4',
        textoEntrada: '',
        textoEntradaCifrado: ''
    })
    const [outputValue, setoutputValue] = useState('El Resultado Saldrá aquí')
    const [outputValueDecifrar, setoutputValueDecifrar] = useState('El Resultado Saldrá aquí')

    const { cifradoAfin, decifradoAfin } = useCypher()

    const [error, setError] = useState(false)

    useEffect(() => {

        onCypher()

    }, [textoEntrada, a, b])


    const onCypher = () => {

        const numeroIncluidos = [1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26]

        if (!numeroIncluidos.includes(parseInt(a)) || !numeroIncluidos.includes(parseInt(b))) {

            setError(true)

            console.log('a en n', numeroIncluidos.includes(parseInt(a)))
            console.log('b en n', numeroIncluidos.includes(parseInt(b)))

        } else {
            setError(false)
        }

        if (textoEntrada.length > 0) {

            setoutputValue(cifradoAfin(textoEntrada, a, b))
        } else {
            setoutputValue('El Resultado Saldrá aquí')
        }

    }

    const onDecypher = () => {

        if (textoEntradaCifrado.length > 0) {
            setoutputValueDecifrar(decifradoAfin(textoEntradaCifrado))
        } else {
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
                outputValueDecifrar,
                error
            }
        }>
            {children}
        </CypherContext.Provider>
    )
}
