import React from 'react'
import './WorkerForms.css'

const WorkerPermission = () => (
  <div className="form-container">
    <h2>Solicitar Permiso</h2>
    <form>
      <input type="date" required />
      <textarea placeholder="Motivo del permiso" rows={4} required />
      <div className="form-buttons">
        <button type="button">Enviar</button>
        <button type="button">Cancelar</button>
      </div>
    </form>
  </div>
)

export default WorkerPermission
