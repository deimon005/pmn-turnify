import React, { useState, useEffect } from 'react'
import './WorkerForms.css'

const WorkerPermission = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Permiso solicitado correctamente')
    // Aquí podrías limpiar el form si quisieras
  }

  useEffect(() => {
    if (message) {
      const t = setTimeout(() => setMessage(''), 3000)
      return () => clearTimeout(t)
    }
  }, [message])

  return (
    <div className="form-container">
      <h2>Solicitar Permiso</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Fecha
          <input type="date" required />
        </label>
        <label>
          Motivo
          <textarea placeholder="Motivo del permiso" rows={4} required />
        </label>
        <div className="form-buttons">
          <button type="submit">Enviar</button>
          <button type="button">Cancelar</button>
        </div>
      </form>
      {message && <div className="permission-toast">{message}</div>}
    </div>
  )
}

export default WorkerPermission
