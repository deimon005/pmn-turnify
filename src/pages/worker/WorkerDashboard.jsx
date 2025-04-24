import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import './WorkerDashboard.css'

const WorkerDashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="worker-dashboard">
      <header>
        <h1>Panel Trabajador</h1>
        <button className="logout-btn" onClick={() => navigate('/')}>
          Cerrar Sesión
        </button>
      </header>
      <nav className="worker-nav">
        <NavLink to="calendar" className={({ isActive }) => (isActive ? 'active' : '')}>
          Mi Calendario
        </NavLink>
        <NavLink to="overtime" className={({ isActive }) => (isActive ? 'active' : '')}>
          Horas Extra
        </NavLink>
        <NavLink to="swap" className={({ isActive }) => (isActive ? 'active' : '')}>
          Intercambio Turnos
        </NavLink>
        <NavLink to="permission" className={({ isActive }) => (isActive ? 'active' : '')}>
          Permisos
        </NavLink>
        <NavLink to="complaint" className={({ isActive }) => (isActive ? 'active' : '')}>
          Quejas
        </NavLink>
      </nav>
      <main className="worker-main">
        <Outlet />
      </main>
    </div>
  )
}

export default WorkerDashboard
