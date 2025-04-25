import React, { useState } from 'react'
import './SupervisorEmployeeCalendar.css'

const weekdays = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom']
const statusColor = {
  blank: '#ffffff',
  present: '#90EE90',
  absent: '#f08080',
  justified: '#add8e6',
  added: '#f1c40f',
}

const SupervisorEmployeeCalendar = () => {
  const [dayStatuses, setDayStatuses] = useState({})
  const [selectedDay, setSelectedDay] = useState(null)

  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  const handleAction = (status) => {
    setDayStatuses(prev => ({ ...prev, [selectedDay]: status }))
    setSelectedDay(null)
  }

  return (
    <div className="supervisor-cal-container">
      <header>
        <h1>Calendario de Trabajador</h1>
      </header>

      <div className="supervisor-calendar-grid">
        {weekdays.map(d => (
          <div key={d} className="calendar-header">{d}</div>
        ))}

        {days.map((day, idx) => {
          const col = idx % 7
          const isWeekend = (col === 5 || col === 6)
          const status = isWeekend ? 'blank' : (dayStatuses[day] || 'blank')
          return (
            <div
              key={day}
              className="supervisor-day"
              style={{ background: statusColor[status] }}
              onClick={() => !isWeekend && setSelectedDay(day)}
            >
              {day}
            </div>
          )
        })}
      </div>

      {selectedDay && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Día {selectedDay}</h2>
            <div className="action-buttons">
              <button onClick={() => handleAction('present')}>Marcar Presente</button>
              <button onClick={() => handleAction('absent')}>Marcar Falta</button>
              <button onClick={() => handleAction('justified')}>Justificar</button>
              <button onClick={() => handleAction('added')}>Añadir Turno</button>
            </div>
            <button className="close-btn" onClick={() => setSelectedDay(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      <button className="back-btn" onClick={() => window.history.back()}>
        ← Volver
      </button>
    </div>
  )
}

export default SupervisorEmployeeCalendar
