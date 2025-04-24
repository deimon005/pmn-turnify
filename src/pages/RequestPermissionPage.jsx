export default function RequestPermissionPage() {
  return (
    <div className="form-container card">
      <h1>Solicitar Permiso</h1>
      <form>
        <label>Fecha: <input type="date" required /></label>
        <label>Motivo:
          <textarea rows={4} placeholder="Describe tu motivo" required />
        </label>
        <div className="form-buttons">
          <button type="submit" className="btn-primary">Enviar</button>
          <button type="button" className="btn-secondary">Cancelar</button>
        </div>
      </form>
    </div>
  )
}