import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SupervisorList.css'

const SupervisorEmployeeList = () => {
  const navigate = useNavigate()
  const empleados = [
    { id: 1, name: 'Ana Pérez', role: 'Trabajador' },
    { id: 2, name: 'Luis Gómez', role: 'Trabajador' },
    { id: 3, name: 'María Ruiz', role: 'Trabajador' },
    { id: 4, name: 'Carlos Díaz', role: 'Trabajador' },
  ]

  return (
    <div className="supervisor-list-container">
      <header className="supervisor-list-header">
        <h1>Mi Plantilla</h1>
        <button
          className="logout-btn"
          onClick={() => navigate('/')}
        >
          Cerrar Sesión
        </button>
      </header>
      <div className="employee-cards">
        {empleados.map(emp => (
          <div key={emp.id} className="employee-card">
            <div className="emp-info">
              <h2>{emp.name}</h2>
              <p>{emp.role}</p>
            </div>
            <button
              onClick={() =>
                navigate(`/dashboard/supervisor/employees/${emp.id}/calendar`)
              }
            >
              Ver Calendario
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SupervisorEmployeeList
