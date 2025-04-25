import React, { useState } from 'react'
import './HRComplaints.css'

const HRComplaints = () => {
  const [complaints, setComplaints] = useState([
    {
      id: 1, worker: 'Ana Pérez', date: '2025-04-20',
      reason: 'Retraso en pago', details: 'No recibí el pago de horas extra.', status: 'Pendiente'
    },
    {
      id: 2, worker: 'Carlos Ruiz', date: '2025-04-21',
      reason: 'Condiciones inseguras', details: 'Falta de equipo de protección.', status: 'En revisión'
    },
  ])
  const [selected, setSelected] = useState(null)

  const updateStatus = (id) => {
    setComplaints(prev =>
      prev.map(c =>
        c.id === id ? { ...c, status: 'Resuelta' } : c
      )
    )
    setSelected(null)
  }

  return (
    <div className="hr-page-container">
      <h1>Quejas Recibidas</h1>
      <table className="hr-table">
        <thead>
          <tr>
            <th>ID</th><th>Trabajador</th><th>Fecha</th><th>Motivo</th><th>Estado</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.worker}</td>
              <td>{c.date}</td>
              <td>{c.reason}</td>
              <td>{c.status}</td>
              <td>
                <button onClick={() => setSelected(c)}>Ver Detalle</button>
                {c.status !== 'Resuelta' && (
                  <button onClick={() => updateStatus(c.id)}>Marcar Resuelta</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Detalle de Queja #{selected.id}</h2>
            <p><strong>Trabajador:</strong> {selected.worker}</p>
            <p><strong>Fecha:</strong> {selected.date}</p>
            <p><strong>Motivo:</strong> {selected.reason}</p>
            <p><strong>Detalles:</strong> {selected.details}</p>
            <button onClick={() => setSelected(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HRComplaints
