import React, { useContext, useState } from 'react'
import { CypherContext } from './Context/CypherContext'
import { TextCard } from './TextCard'
import { Button, Modal, Table } from 'react-bootstrap'
import { Frecuencies } from './Frecuencies'

export const DecypherTab = () => {

  const { textoEntradaCifrado, outputValueDecifrar, onInputChange, onDecypher, letraMasRepetidaLBL, letraMasRepetidaLBL2, letraMasRepetidaNb, letraMasRepetidaNb2, letraMasRepetitaPer, letraMasRepetitaPer2, calculoA, calculoB, cantidadCaracteres, letrasRepetidas } = useContext(CypherContext)

  const [invertir, setInvertir] = useState(false)

  const [showModal, setshowModal] = useState(false)

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
            <Frecuencies titleCard={'Primera letra mas repetida'} label={letraMasRepetidaLBL} valueCard={letraMasRepetidaNb} disabled={true} percentage={letraMasRepetitaPer} />
          </div>
          <div className="col-3">
            <Frecuencies titleCard={'Segunda letra mas repetida'} label={letraMasRepetidaLBL2} valueCard={letraMasRepetidaNb2} disabled={true} percentage={letraMasRepetitaPer2} />
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
        <Button className='mr-1 ml-1' onClick={invertirFunction}>Invertir</Button>
        <Button className='mr-1 ml-1' onClick={e => setshowModal(true)}>Tabla de Frecuencias</Button>

      </div>

      <Modal show={showModal} onHide={e => setshowModal(false)}>

        <Modal.Header closeButton>

          Tabla de Frecuencias

        </Modal.Header>
        <Modal.Body>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Letra</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>

              {
                letrasRepetidas.map((letra) => {

                  console.log(letra)
                  return (
                    <>

                      <tr>
                        <th>{letra.letra}</th>
                        <th>{letra.vecesRepetidas}</th>
                      </tr>

                    </>)

                })
              }

            </tbody>
          </Table>

        </Modal.Body>

      </Modal>

    </>
  )
}
