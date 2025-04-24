export default function FileComplaintPage() {
  return (
    <div className="form-container card">
      <h1>Reportar Problema</h1>
      <form>
        <label>Fecha: <input type="date" required /></label>
        <label>Descripción:
          <textarea rows={4} placeholder="¿Qué sucedió?" required />
        </label>
        <div className="form-buttons">
          <button type="submit" className="btn-primary">Enviar</button>
          <button type="button" className="btn-secondary">Cancelar</button>
        </div>
      </form>
    </div>
  )
}