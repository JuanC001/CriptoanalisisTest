import React, { useContext } from 'react'
import { CypherContext } from './Context/CypherContext'
import { TextCard } from './TextCard'
import { Button } from 'react-bootstrap'

export const DecypherTab = () => {

  const {textoEntradaCifrado, outputValueDecifrar, onInputChange, onDecypher} = useContext(CypherContext)

  return (
    <>

      <div className="mt-3">
        <TextCard name={"textoEntradaCifrado"} titleCard={"Introduce el Texto Cifrado:"} valueCard={textoEntradaCifrado} onChange={onInputChange}/>
      </div>

      <div className="mt-3">

        <Button onClick={onDecypher}>Decifrar</Button>

      </div>

      <div className="mt-3 mb-1">
        <TextCard name={"outputValueDecifrar"} titleCard={"Texto Decifrado:"} disabled={true} valueCard={outputValueDecifrar} onChange={onInputChange}/>
      </div>

    </>
  )
}
