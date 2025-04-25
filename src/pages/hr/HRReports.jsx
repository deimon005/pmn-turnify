import React from 'react'
import './HRReports.css'

const HRReports = () => {
  const summary = {
    totalEmployees: 45,
    absencesThisWeek: 3,
    pendingPermits: 2,
    openComplaints: 1,
    overtimeTaken: 12,
  }

  const weeklyStats = [
    { metric: 'Turnos asignados', value: 120 },
    { metric: 'Horas extra solicitadas', value: 18 },
    { metric: 'Permisos aprobados', value: 5 },
    { metric: 'Quejas recibidas', value: 2 },
  ]

  return (
    <div className="hr-page-container">
      <h1>Reportes Generales</h1>
      <div className="cards">
        <div className="card">
          <h3>Total Empleados</h3>
          <p>{summary.totalEmployees}</p>
        </div>
        <div className="card">
          <h3>Faltas Semana</h3>
          <p>{summary.absencesThisWeek}</p>
        </div>
        <div className="card">
          <h3>Permisos Pendientes</h3>
          <p>{summary.pendingPermits}</p>
        </div>
        <div className="card">
          <h3>Quejas Abiertas</h3>
          <p>{summary.openComplaints}</p>
        </div>
        <div className="card">
          <h3>Horas Extra Tomadas</h3>
          <p>{summary.overtimeTaken}</p>
        </div>
      </div>

      <h2>Estadísticas Semanales</h2>
      <table className="hr-table">
        <thead>
          <tr>
            <th>Métrica</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {weeklyStats.map((s, i) => (
            <tr key={i}>
              <td>{s.metric}</td>
              <td>{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HRReports
