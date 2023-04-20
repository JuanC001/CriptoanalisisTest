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

    const [letraMasRepetitaPer, setLetraMasRepetitaPer] = useState(0)
    const [letraMasRepetitaPer2, setLetraMasRepetitaPer2] = useState(0)

    const [letraMasRepetidaNb, setletraMasRepetidaNb] = useState('')
    const [letraMasRepetidaNb2, setletraMasRepetidaNb2] = useState('')

    const [calculoA, setCalculoA] = useState('')
    const [calculoB, setCalculoB] = useState('')

    const [letrasRepetidas, setletrasRepetidas] = useState([])

    const [cantidadCaracteres, setCantidadCaracteres] = useState(0)

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

    const onDecypher = (inverted) => {

        if (textoEntradaCifrado.length > 0) {
            const { textoDecifrado, numeroCaracteres, letrasMasRepetidas, a, b, letrasEnv } = decifradoAfin(textoEntradaCifrado, inverted)
            setoutputValueDecifrar(textoDecifrado)
            setletraMasRepetida(letrasMasRepetidas[0].letra)
            setletraMasRepetidaNb(letrasMasRepetidas[0].veces)
            setLetraMasRepetitaPer(letrasMasRepetidas[0].porcentaje)

            setletraMasRepetida2(letrasMasRepetidas[1].letra)
            setletraMasRepetidaNb2(letrasMasRepetidas[1].veces)
            setLetraMasRepetitaPer2(letrasMasRepetidas[1].porcentaje)

            setCalculoA(a)
            setCalculoB(b)

            setletrasRepetidas(letrasEnv)

            setCantidadCaracteres(numeroCaracteres)

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

                letraMasRepetitaPer,
                letraMasRepetitaPer2,

                letrasRepetidas,

                calculoA,
                calculoB,
                cantidadCaracteres,

                error
            }
        }>
            {children}
        </CypherContext.Provider>
    )
}
