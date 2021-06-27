import React, { useState } from 'react'
import res from '../utils/res'
require('./style.css')

export const Sustractor = () => {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [result, setResult] = useState(0)

  const onClickRes = () => {
    let result = res(numero1, numero2)
    console.log(result)
    setResult(result)
  }

  return (
    <div>
      <div>
        <div className="mb-3 form-group">
          <label htmlFor="first-value" className="form-label">
            Minuendo
          </label>
          <input
            type="number"
            className="form-control"
            id="first-value"
            aria-describedby="firtsValue"
            onChange={(e) => setNumero1(e.currentTarget.value)}
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="second-value" className="form-label">
            Sustraendo
          </label>
          <input
            type="number"
            className="form-control"
            id="second-value"
            aria-describedby="secondValue"
            onChange={(e) => setNumero2(e.currentTarget.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={() => onClickRes()}>
          Restar
        </button>
      </div>
      {result !== 0 && (
        <div className="resultado">
          <h2>Resultado = {result}</h2>
        </div>
      )}
    </div>
  )
}