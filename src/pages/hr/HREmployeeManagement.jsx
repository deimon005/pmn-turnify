import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HREmployeeManagement.css'

const HREmployeeManagement = () => {
  const navigate = useNavigate()
  const employees = [
    { id: 1, name: 'Ana Pérez' },
    { id: 2, name: 'Carlos Ruiz' },
    { id: 3, name: 'María López' },
    { id: 4, name: 'Laura Sánchez' },
  ]

  return (
    <div className="hr-page-container">
      <h1>Gestión de Empleados</h1>
      <input
        className="search-input"
        type="text"
        placeholder="🔍 Buscar..."
      />

      <table className="hr-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>
                <button
                  className="action-btn"
                  onClick={() =>
                    navigate(`/dashboard/hr/employees/${emp.id}/shifts`)
                  }
                >
                  Ver Turnos
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HREmployeeManagement
