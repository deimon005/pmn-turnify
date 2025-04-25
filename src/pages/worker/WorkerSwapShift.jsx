import React, { useState, useEffect } from 'react'
import './WorkerSwapShift.css'

const myShifts = [
  { id: 4, time: '08:00-17:00' },
  { id: 12, time: '09:00-18:00' },
]
const othersShifts = [
  { id: 6, time: '07:00-16:00', worker: 'María López' },
  { id: 14, time: '10:00-19:00', worker: 'Carlos Ruiz' },
]

const WorkerSwapShift = () => {
  const [uploaded, setUploaded] = useState([])
  const [swapped, setSwapped] = useState([])
  const [message, setMessage] = useState('')

  const handleUpload = (shift) => {
    if (!uploaded.includes(shift.id)) {
      setUploaded(prev => [...prev, shift.id])
      setMessage(`Turno del día ${shift.id} subido para intercambio`)
    }
  }
  const handleSwap = (shift) => {
    if (!swapped.includes(shift.id)) {
      setSwapped(prev => [...prev, shift.id])
      setMessage(`Solicitado intercambio para el día ${shift.id}`)
    }
  }

  useEffect(() => {
    if (message) {
      const t = setTimeout(() => setMessage(''), 3000)
      return () => clearTimeout(t)
    }
  }, [message])

  return (
    <div className="swap-container">
      <h2>Intercambio de Turnos</h2>
      <div>
        <h3>Mis turnos actuales:</h3>
        <ul className="swap-list">
          {myShifts.map(shift => (
            <li key={shift.id}>
              Día {shift.id} – {shift.time}
              <button
                onClick={() => handleUpload(shift)}
                disabled={uploaded.includes(shift.id)}
                className={uploaded.includes(shift.id) ? 'uploaded' : ''}
              >
                {uploaded.includes(shift.id) ? 'Subido' : 'Subir para intercambio'}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Turnos de otros compañeros:</h3>
        <ul className="swap-list">
          {othersShifts.map(shift => (
            <li key={shift.id}>
              Día {shift.id} – {shift.time} ({shift.worker})
              <button
                onClick={() => handleSwap(shift)}
                disabled={swapped.includes(shift.id)}
                className={swapped.includes(shift.id) ? 'swapped' : ''}
              >
                {swapped.includes(shift.id) ? 'Intercambiado' : 'Intercambiar'}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {message && <div className="swap-toast">{message}</div>}
    </div>
  )
}

export default WorkerSwapShift
