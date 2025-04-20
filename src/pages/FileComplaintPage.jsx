import { useNavigate } from 'react-router-dom'

const FileComplaintPage = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de envío (simulación)
    navigate(-1)
  }

  return (
    <div className="form-container">
      <h1>Reportar Problema</h1>
      <form onSubmit={handleSubmit}>
        <input type="date" required />
        <textarea
          placeholder="Descripción del problema"
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

export default FileComplaintPage