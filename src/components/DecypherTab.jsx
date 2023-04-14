import React, { useContext, useState } from 'react'
import { CypherContext } from './Context/CypherContext'
import { TextCard } from './TextCard'
import { Button } from 'react-bootstrap'
import { Frecuencies } from './Frecuencies'

export const DecypherTab = () => {

  const { textoEntradaCifrado, outputValueDecifrar, onInputChange, onDecypher, letraMasRepetidaLBL, letraMasRepetidaLBL2, letraMasRepetidaNb, letraMasRepetidaNb2, calculoA, calculoB, cantidadCaracteres } = useContext(CypherContext)

  const [invertir, setInvertir] = useState(false)

  const invertirFunction = () => {
    setInvertir(!invertir)
    onDecypher(invertir)
  }

  return (
    <>

      <div className="mt-3">
        <TextCard name={"textoEntradaCifrado"} titleCard={"Introduce el Texto Cifrado:"} valueCard={textoEntradaCifrado} onChange={onInputChange} />
      </div>

      <div className="mt-3">

        <div className="m-auto mt-3" style={{ display: 'flex', margin: 'auto', alignContent: 'center', justifyContent: 'center' }}>
          <Button onClick={e => onDecypher(false)} size='lg'>Decifrar</Button>
        </div>

        <div className="row mt-3">
          <div className="col-3">
            <Frecuencies titleCard={'Calculo A'} label={'A'} valueCard={calculoA} disabled={true} />
          </div>
          <div className="col-3">
            <Frecuencies titleCard={'Calculo B'} label={'B'} valueCard={calculoB} disabled={true} />
          </div>
          <div className="col-3">
            <Frecuencies titleCard={'La letra mas repetida'} label={letraMasRepetidaLBL} valueCard={letraMasRepetidaNb} disabled={true} />
          </div>
          <div className="col-3">
            <Frecuencies titleCard={'Segunda letra mas repetida'} label={letraMasRepetidaLBL2} valueCard={letraMasRepetidaNb2} disabled={true} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <Frecuencies titleCard={'Cantidad de Caracteres'} label={'#'} valueCard={cantidadCaracteres} disabled={true} />
          </div>
        </div>

      </div>

      <div className="mt-3 mb-1">
        <TextCard name={"outputValueDecifrar"} titleCard={"Texto Decifrado:"} disabled={true} valueCard={outputValueDecifrar} onChange={onInputChange} />
      </div>

      <div className="mt-3 mb-1 m-auto" style={{ display: 'flex', margin: 'auto', alignContent: 'center', justifyContent: 'center' }}>
        <Button onClick={invertirFunction}>Invertir</Button>
      </div>

    </>
  )
}
