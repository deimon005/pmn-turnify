import React, { useState, useEffect } from 'react'
import './WorkerForms.css'

const WorkerComplaint = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Queja reportada correctamente')
  }

  useEffect(() => {
    if (message) {
      const t = setTimeout(() => setMessage(''), 3000)
      return () => clearTimeout(t)
    }
  }, [message])

  return (
    <div className="form-container">
      <h2>Reportar Problema</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" required />
        <textarea placeholder="Descripción del problema" rows={4} required />
        <div className="form-buttons">
          <button type="submit">Enviar</button>
          <button type="button">Cancelar</button>
        </div>
      </form>
      {message && <div className="toast">{message}</div>}
    </div>
  )
}

export default WorkerComplaint
