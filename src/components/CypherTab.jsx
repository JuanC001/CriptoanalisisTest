import React, { useContext } from 'react'
import { CypherContext } from './Context/CypherContext'
import { FieldCard } from './FieldCard'
import { TextCard } from './TextCard'

export const CypherTab = () => {
    const { a, b, textoEntrada, onInputChange, outputValue } = useContext(CypherContext)
    return (<>
        <div className="mt-3">
            <TextCard titleCard={"Texto a Cifrar:"} valueCard={textoEntrada} onChange={onInputChange} disabled={false} name={"textoEntrada"} />
        </div>
        <div className="row mt-3">
            <div className="col-6">
                <FieldCard titleCard={"Introduzca A:"} valueCard={a} onChange={onInputChange} disabled={false} name={"a"} />
            </div>
            <div className="col-6">
                <FieldCard titleCard={"Introduzca B:"} valueCard={b} onChange={onInputChange} disabled={false} name={"b"} />
            </div>
        </div>
        <div className="mt-3">
            <TextCard titleCard={"Texto Resultante:"} valueCard={outputValue} onChange={onInputChange} disabled={true} name={"salida"} />
        </div>
    </>
    )
}
