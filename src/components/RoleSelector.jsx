import React from 'react'

const RoleSelector = ({ role, onChange }) => (
  <div style={{ margin: '1rem 0' }}>
    <label>
      <input
        type="radio"
        name="role"
        value="worker"
        checked={role === 'worker'}
        onChange={onChange}
      />{' '}
      Trabajador
    </label>
    {' '}
    <label>
      <input
        type="radio"
        name="role"
        value="supervisor"
        checked={role === 'supervisor'}
        onChange={onChange}
      />{' '}
      Supervisor
    </label>
    {' '}
    <label>
      <input
        type="radio"
        name="role"
        value="hr"
        checked={role === 'hr'}
        onChange={onChange}
      />{' '}
      Recursos Humanos
    </label>
  </div>
)

export default RoleSelector
