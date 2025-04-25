import React, { useState } from 'react'
import './HRPermissions.css'

const HRPermissions = () => {
  const [requests, setRequests] = useState([
    { id: 1, worker: 'Ana Pérez', from: '2025-04-25', to: '2025-04-27', reason: 'Cita médica', status: 'Pendiente' },
    { id: 2, worker: 'Carlos Ruiz', from: '2025-05-01', to: '2025-05-01', reason: 'Asuntos personales', status: 'Pendiente' },
  ])

  const handleDecision = (id, decision) => {
    setRequests(prev =>
      prev.map(r =>
        r.id === id ? { ...r, status: decision } : r
      )
    )
  }

  return (
    <div className="hr-page-container">
      <h1>Solicitudes de Permisos</h1>
      <table className="hr-table">
        <thead>
          <tr>
            <th>ID</th><th>Trabajador</th><th>Desde</th><th>Hasta</th><th>Motivo</th><th>Estado</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.worker}</td>
              <td>{r.from}</td>
              <td>{r.to}</td>
              <td>{r.reason}</td>
              <td>{r.status}</td>
              <td>
                {r.status === 'Pendiente' && (
                  <>
                    <button onClick={() => handleDecision(r.id, 'Aprobado')}>Aprobar</button>
                    <button onClick={() => handleDecision(r.id, 'Negado')}>Negar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HRPermissions
