import React from 'react'

const DayModal = ({ day, status, onClose }) => (
  <div className="modal-backdrop">
    <div className="modal-content">
      <h2>Día {day}</h2>
      <p>Estado: <strong>{status}</strong></p>
      {status !== 'finde' && (
        <>
          <p>Horario: 08:00 - 17:00</p>
          <p>Supervisor: Juan Pérez</p>
          <p>Obra: Edificio Central</p>
          {status === 'vino' && <p>Ganancia: $120</p>}
        </>
      )}
      <button onClick={onClose}>Cerrar</button>
    </div>
  </div>
)

export default DayModal
