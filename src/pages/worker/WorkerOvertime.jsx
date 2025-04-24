import React from 'react'
import './WorkerOvertime.css'

const WorkerOvertime = () => (
  <div className="overtime-container">
    <h2>Horas Extra Disponibles</h2>
    <ul className="overtime-list">
      <li className="overtime-item">
        Día 3 – Supervisor: Pérez – Obra: Norte – Ganancia: $30
        <button>Tomar</button>
      </li>
      <li className="overtime-item">
        Día 5 – Supervisor: Gómez – Obra: Sur – Ganancia: $28 (domingo)
        <button>Tomar</button>
      </li>
      <li className="overtime-item">
        Día 7 – Supervisor: Ruiz – Obra: Centro – Ganancia: $35 (feriado)
        <button>Tomar</button>
      </li>
      <li className="overtime-item">
        Día 9 – Supervisor: Díaz – Obra: Este – Ganancia: $29
        <button>Tomar</button>
      </li>
      <li className="overtime-item">
        Día 11 – Supervisor: Pardo – Obra: Oeste – Ganancia: $30
        <button>Tomar</button>
      </li>
      {/* más placeholders */}
    </ul>
  </div>
)

export default WorkerOvertime
