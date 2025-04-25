import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './HRShiftDetails.css'

const HRShiftDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Datos de ejemplo: turnos y horas extra
  const [shifts] = useState([
    { day: 3, time: '08:00-17:00', supervisor: 'Pérez', obra: 'Norte' },
    { day: 5, time: '09:00-18:00', supervisor: 'Gómez', obra: 'Sur' },
    { day: 7, time: '07:00-12:00', supervisor: 'Ruiz', obra: 'Centro', extra: true, extraType: 'domingo', extraPay: 50, extraStatus: 'pendiente' },
    { day: 9, time: '14:00-18:00', supervisor: 'Díaz', obra: 'Este', extra: true, extraType: 'entre semana', extraPay: 30, extraStatus: 'aprobado' },
  ])
  const [extras, setExtras] = useState(shifts.filter(s => s.extra))

  const handleExtra = (day, action) => {
    setExtras(prev =>
      prev.map(e =>
        e.day === day ? { ...e, extraStatus: action } : e
      )
    )
  }

  return (
    <div className="hr-page-container">
      <header className="hr-shifts-header">
        <h1>Turnos de {id}</h1>
        <button className="logout-btn" onClick={() => navigate('/dashboard/hr/employees')}>
          ← Volver
        </button>
      </header>

      <section>
        <h2>Horario Regular</h2>
        <table className="hr-table">
          <thead>
            <tr>
              <th>Día</th>
              <th>Hora</th>
              <th>Supervisor</th>
              <th>Obra</th>
            </tr>
          </thead>
          <tbody>
            {shifts
              .filter(s => !s.extra)
              .map(s => (
                <tr key={s.day}>
                  <td>{s.day}</td>
                  <td>{s.time}</td>
                  <td>{s.supervisor}</td>
                  <td>{s.obra}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Horas Extra</h2>
        <table className="hr-table">
          <thead>
            <tr>
              <th>Día</th>
              <th>Hora</th>
              <th>Tipo</th>
              <th>Pago</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {extras.map(e => (
              <tr key={e.day}>
                <td>{e.day}</td>
                <td>{e.time}</td>
                <td>{e.extraType}</td>
                <td>${e.extraPay}</td>
                <td>{e.extraStatus}</td>
                <td>
                  {e.extraStatus === 'pendiente' && (
                    <>
                      <button
                        className="action-btn"
                        onClick={() => handleExtra(e.day, 'aprobado')}
                      >
                        Aprobar
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => handleExtra(e.day, 'denegado')}
                      >
                        Denegar
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default HRShiftDetails
