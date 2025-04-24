import React from 'react'
import './WorkerSwapShift.css'

const WorkerSwapShift = () => (
  <div className="swap-container">
    <h2>Intercambio de Turnos</h2>
    <div>
      <h3>Mis turnos actuales:</h3>
      <ul className="swap-list">
        <li>
          Día 4 – 08:00-17:00 <button>Subir para intercambio</button>
        </li>
        <li>
          Día 12 – 09:00-18:00 <button>Subir para intercambio</button>
        </li>
      </ul>
    </div>
    <div>
      <h3>Turnos de otros compañeros:</h3>
      <ul className="swap-list">
        <li>
          Día 6 – 07:00-16:00 (María López) <button>Intercambiar</button>
        </li>
        <li>
          Día 14 – 10:00-19:00 (Carlos Ruiz) <button>Intercambiar</button>
        </li>
      </ul>
    </div>
  </div>
)

export default WorkerSwapShift
