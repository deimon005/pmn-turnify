import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SchedulingPage = () => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('shifts')
  
  // Datos de ejemplo
  const shifts = [3, 5, 12, 18, 25] // Días con turnos asignados
  const overtimeDays = [7, 14, 21, 28] // Días con horas extra disponibles

  return (
    <div className="dashboard-container">
      <h1>Panel del Trabajador</h1>
      
      <div className="button-group">
        <button onClick={() => setActiveSection('shifts')}>Ver Turnos</button>
        <button onClick={() => setActiveSection('overtime')}>Pedir Horas Extra</button>
        <button onClick={() => navigate('/request-permission')}>Solicitar Permiso</button>
        <button onClick={() => navigate('/file-complaint')}>Reportar Problema</button>
        <button onClick={() => navigate('/')}>Cerrar Sesión</button>
      </div>

      {activeSection === 'shifts' && (
        <div className="calendar-grid">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
            <div 
              key={day}
              className="calendar-day"
              style={{ background: shifts.includes(day) ? '#90EE90' : 'white' }}
            >
              {day}
            </div>
          ))}
        </div>
      )}

      {activeSection === 'overtime' && (
        <div className="overtime-grid">
          {overtimeDays.map((day) => (
            <div key={day} className="overtime-day">
              Día {day} - Disponible
              <button className="request-button">Solicitar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SchedulingPage