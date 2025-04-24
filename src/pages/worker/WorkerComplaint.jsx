import React from 'react'
import './WorkerForms.css'

const WorkerComplaint = () => (
  <div className="form-container">
    <h2>Reportar Problema</h2>
    <form>
      <input type="date" required />
      <textarea placeholder="Descripción del problema" rows={4} required />
      <div className="form-buttons">
        <button type="button">Enviar</button>
        <button type="button">Cancelar</button>
      </div>
    </form>
  </div>
)

export default WorkerComplaint
