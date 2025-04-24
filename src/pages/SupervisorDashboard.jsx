import SupervisorCalendar from '../components/Calendar/SupervisorCalendar'
import '../components/styles.css'

export default function SupervisorDashboard() {
  return (
    <div className="dashboard-container">
      <h1>Panel del Supervisor</h1>
      <SupervisorCalendar />
      <div className="overtime-assign">
        <h2>Horas Extra Disponibles</h2>
        <div className="list">
          <div className="item">Día 10 - 2h <button className="btn-primary ml-2">Publicar</button></div>
          <div className="item">Día 20 - 3h <button className="btn-primary ml-2">Publicar</button></div>
        </div>
      </div>
    </div>
  )
}