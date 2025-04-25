import React, { useState } from 'react'
import DayModal from './DayModal'
import './styles.css'

const placeholderStatuses = {
  1: 'vino', 2: 'vino', 3: 'vino',
  4: 'faltó', 5: 'faltó', 6: 'justificado',
  7: 'vino', 8: 'vino', 9: 'faltó',
  10: 'vino', 11: 'vino', 12: 'vino',
  13: 'vino', 14: 'vino', 15: 'vino',
  16: 'vino', 17: 'vino', 18: 'vino',
  19: 'vino', 20: 'vino', 21: 'vino',
  22: 'vino', 23: 'justificado', 24: 'vino',
  25: 'vino', 26: 'vino', 27: 'vino',
  28: 'vino', 29: 'vino', 30: 'vino',
  31: 'vino',
}

const statusColor = {
  vino: '#90EE90',
  'faltó': '#f08080',
  justificado: '#add8e6',
  finde: '#ffffff',
}

// Semana de Lunes a Domingo
const weekdays = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom']

const CalendarGrid = () => {
  const [selectedDay, setSelectedDay] = useState(null)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <>
      <div className="calendar-grid">
        {/* Encabezado de días */}
        {weekdays.map(d => (
          <div key={d} className="calendar-header">{d}</div>
        ))}

        {/* Días numerados */}
        {days.map((day, idx) => {
          // idx%7: 0=Lun … 5=Sáb, 6=Dom
          const col = idx % 7
          const status = (col === 5 || col === 6)
            ? 'finde'
            : (placeholderStatuses[day] || 'vino')
          return (
            <div
              key={day}
              className="calendar-day"
              style={{ background: statusColor[status] }}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </div>
          )
        })}
      </div>

      {/* Modal con detalles */}
      {selectedDay != null && (
        <DayModal
          day={selectedDay}
          status={
            ((selectedDay - 1) % 7 === 5 || (selectedDay - 1) % 7 === 6)
              ? 'finde'
              : (placeholderStatuses[selectedDay] || 'vino')
          }
          onClose={() => setSelectedDay(null)}
        />
      )}
    </>
  )
}

export default CalendarGrid
