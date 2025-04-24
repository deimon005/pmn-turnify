import React, { useState } from 'react'
import './Supervisor.css'

const SupervisorEmployeeCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div className="supervisor-container">
      <header>
        <h1>Calendario de Trabajador</h1>
      </header>
      <div className="supervisor-calendar-grid">
        {days.map(day => (
          <div
            key={day}
            className="supervisor-day"
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </div>
        ))}
      </div>
      {selectedDay && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Día {selectedDay}</h2>
            <button>Marcar Presente</button>
            <button>Marcar Falta</button>
            <button>Justificar</button>
            <button>Añadir Turno</button>
            <button>Eliminar Turno</button>
            <button onClick={() => setSelectedDay(null)}>Cerrar</button>
          </div>
        </div>
      )}
      <button className="back-btn" onClick={() => window.history.back()}>
        Volver
      </button>
    </div>
  )
}

export default SupervisorEmployeeCalendar
