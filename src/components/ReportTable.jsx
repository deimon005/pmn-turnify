export default function ReportTable({ type }) {
    const headers = {
      shifts:['Supervisor','Trabajador','Día','Hora'],
      overtime:['Trabajador','Día','Horas','Estado'],
      quota:['Supervisor','Cuota Turnos'],
      attendance:['Trabajador','Faltas Semana'],
      complaints:['Nombre','Hora','Motivo'],
      permissions:['Trabajador','Fecha','Motivo','Estado']
    }
    const data = [ /* placeholder rows según type */ ]
    return (
      <table className="report-table">
        <thead><tr>{headers[type].map(h=><th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          <tr><td colSpan={headers[type].length}>Datos de ejemplo...</td></tr>
        </tbody>
      </table>
    )
  }