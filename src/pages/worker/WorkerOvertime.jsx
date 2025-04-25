import React, { useState, useEffect } from 'react'
import './WorkerOvertime.css'

const overtimeData = [
  { id: 3, supervisor: 'Pérez', obra: 'Norte', ganancia: 30, note: '' },
  { id: 5, supervisor: 'Gómez', obra: 'Sur', ganancia: 28, note: '(domingo)' },
  { id: 7, supervisor: 'Ruiz', obra: 'Centro', ganancia: 35, note: '(feriado)' },
  { id: 9, supervisor: 'Díaz', obra: 'Este', ganancia: 29, note: '' },
  { id: 11, supervisor: 'Pardo', obra: 'Oeste', ganancia: 30, note: '' },
]

const WorkerOvertime = () => {
  const [reserved, setReserved] = useState([])
  const [message, setMessage] = useState('')

  const handleTake = (item) => {
    if (!reserved.includes(item.id)) {
      setReserved(prev => [...prev, item.id])
      setMessage(`Hora extra del día ${item.id} tomada con éxito`)
    }
  }

  // Desaparece el toast tras 3s
  useEffect(() => {
    if (message) {
      const t = setTimeout(() => setMessage(''), 3000)
      return () => clearTimeout(t)
    }
  }, [message])

  return (
    <div className="overtime-container">
      <h2>Horas Extra Disponibles</h2>
      <ul className="overtime-list">
        {overtimeData.map(item => (
          <li key={item.id} className="overtime-item">
            Día {item.id} – Supervisor: {item.supervisor} – Obra: {item.obra} – 
            Ganancia: ${item.ganancia} {item.note}{' '}
            <button
              className={`take-btn ${reserved.includes(item.id) ? 'reserved' : ''}`}
              onClick={() => handleTake(item)}
              disabled={reserved.includes(item.id)}
            >
              {reserved.includes(item.id) ? 'Reservado' : 'Tomar'}
            </button>
          </li>
        ))}
      </ul>
      {message && <div className="toast">{message}</div>}
    </div>
  )
}

export default WorkerOvertime
