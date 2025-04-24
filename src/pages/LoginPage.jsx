import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RoleSelector from '../components/RoleSelector'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('worker')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // Sin backend: navegamos según rol
    navigate(`/dashboard/${role}`)
  }

  return (
    <div className="login-container" style={{ maxWidth: 400, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8 }}>
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }}
        />

        <RoleSelector role={role} onChange={e => setRole(e.target.value)} />

        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default LoginPage
