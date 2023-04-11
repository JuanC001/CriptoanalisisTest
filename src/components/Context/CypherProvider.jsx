import React, { useEffect, useState } from 'react'
import { CypherContext } from './CypherContext'
import { useCypher } from '../Hooks/useCypher'
import { useForm } from '../Hooks/useForm'

export const CypherProvider = ({ children }) => {

    const { a, b, textoEntrada, textoEntradaCifrado, onInputChange } = useForm({
        a: '11',
        b: '4',
        textoEntrada: '',
        textoEntradaCifrado: '',
    })

    const [letraMasRepetidaLBL, setletraMasRepetida] = useState('')
    const [letraMasRepetidaLBL2, setletraMasRepetida2] = useState('')

    const [letraMasRepetidaNb, setletraMasRepetidaNb] = useState('')
    const [letraMasRepetidaNb2, setletraMasRepetidaNb2] = useState('')

    const [calculoA, setCalculoA] = useState('')
    const [calculoB, setCalculoB] = useState('')

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
            const { textoDecifrado, letraMasRepetidaEnv, letra2MasRepetidaEnv, a, b } = decifradoAfin(textoEntradaCifrado)
            setoutputValueDecifrar(textoDecifrado)
            setletraMasRepetida(letraMasRepetidaEnv.letra)
            setletraMasRepetidaNb(letraMasRepetidaEnv.veces)

            setletraMasRepetida2(letra2MasRepetidaEnv.letra)
            setletraMasRepetidaNb2(letra2MasRepetidaEnv.veces)

            setCalculoA(a)
            setCalculoB(b)

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

                letraMasRepetidaLBL,
                letraMasRepetidaLBL2,

                letraMasRepetidaNb,
                letraMasRepetidaNb2,

                calculoA,
                calculoB,

                error
            }
        }>
            {children}
        </CypherContext.Provider>
    )
}
