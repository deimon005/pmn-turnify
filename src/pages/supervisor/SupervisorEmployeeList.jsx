import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Supervisor.css'

const SupervisorEmployeeList = () => {
  const navigate = useNavigate()
  const empleados = [
    { id: 1, name: 'Ana Pérez' },
    { id: 2, name: 'Luis Gómez' },
    { id: 3, name: 'María Ruiz' },
  ]
  return (
    <div className="supervisor-container">
      <header>
        <h1>Supervisor – Mi Plantilla</h1>
      </header>
      <ul className="employee-list">
        {empleados.map(emp => (
          <li key={emp.id}>
            {emp.name}
            <button
              onClick={() =>
                navigate(
                  `/dashboard/supervisor/employees/${emp.id}/calendar`
                )
              }
            >
              Ver Calendario
            </button>
          </li>
        ))}
      </ul>
      <button className="logout-btn" onClick={() => navigate('/')}>
        Cerrar Sesión
      </button>
    </div>
  )
}

export default SupervisorEmployeeList
