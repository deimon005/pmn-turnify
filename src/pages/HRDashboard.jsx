import ReportTable from '../components/ReportTable'
import '../components/styles.css'

export default function HRDashboard() {
  return (
    <div className="dashboard-container">
      <h1>Panel de Recursos Humanos</h1>
      <section>
        <h2>Turnos x Supervisor</h2>
        <ReportTable type="shifts" />
      </section>
      <section>
        <h2>Solicitudes de Horas Extra</h2>
        <ReportTable type="overtime" />
      </section>
      <section>
        <h2>Asignar cuotas de Turnos</h2>
        <ReportTable type="quota" />
      </section>
      <section>
        <h2>Asistencias Semanales</h2>
        <ReportTable type="attendance" />
      </section>
      <section>
        <h2>Quejas Recibidas</h2>
        <ReportTable type="complaints" />
      </section>
      <section>
        <h2>Permisos</h2>
        <ReportTable type="permissions" />
      </section>
    </div>
  )
}