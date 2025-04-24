import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import './HRDashboard.css'

const HRDashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="hr-dashboard">
      <header>
        <h1>Panel RR.HH.</h1>
        <button className="logout-btn" onClick={() => navigate('/')}>
          Cerrar Sesión
        </button>
      </header>
      <nav className="hr-nav">
        <NavLink to="employees" className={({ isActive }) => (isActive ? 'active' : '')}>
          Empleados
        </NavLink>
        <NavLink to="complaints" className={({ isActive }) => (isActive ? 'active' : '')}>
          Quejas
        </NavLink>
        <NavLink to="permissions" className={({ isActive }) => (isActive ? 'active' : '')}>
          Permisos
        </NavLink>
        <NavLink to="reports" className={({ isActive }) => (isActive ? 'active' : '')}>
          Reportes
        </NavLink>
      </nav>
      <main className="hr-main">
        <Outlet />
      </main>
    </div>
  )
}

export default HRDashboard
