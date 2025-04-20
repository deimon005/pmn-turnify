import { useNavigate } from 'react-router-dom'

const RequestPermissionPage = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de envío (simulación)
    navigate(-1) // Regresa al dashboard
  }

  return (
    <div className="form-container">
      <h1>Solicitar Permiso</h1>
      <form onSubmit={handleSubmit}>
        <input type="date" required />
        <textarea 
          placeholder="Motivo del permiso"
          rows="4"
          required
        />
        <div className="form-buttons">
          <button type="submit">Enviar</button>
          <button type="button" onClick={() => navigate(-1)}>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default RequestPermissionPage