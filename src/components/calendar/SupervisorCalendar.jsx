import { useState } from 'react'
export default function SupervisorCalendar() {
  const days = Array.from({length:30},(_,i)=>i+1)
  const [sel, setSel] = useState(null)

  return (
    <div>
      <h2>Asignar Turnos</h2>
      <div className="calendar-grid physical">
        {days.map(d=>(
          <div key={d} className="calendar-day" onClick={()=>setSel(d)}>{d}</div>
        ))}
      </div>
      {sel && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h3>Turno Día {sel}</h3>
            <label>Hora Inicio: <input type="time" /></label>
            <label>Hora Fin: <input type="time" /></label>
            <div className="actions">
              <button className="status-red">Cancelar</button>
              <button className="status-yellow">Ausente Justificado</button>
              <button className="status-green">Asignar</button>
            </div>
            <button className="btn-secondary mt-2" onClick={()=>setSel(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  )
}