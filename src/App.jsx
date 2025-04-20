import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SchedulingPage from './pages/SchedulingPage'
import RequestPermissionPage from './pages/RequestPermissionPage'
import FileComplaintPage from './pages/FileComplaintPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/scheduling" element={<SchedulingPage />} />
      <Route path="/request-permission" element={<RequestPermissionPage />} />
      <Route path="/file-complaint" element={<FileComplaintPage />} />
    </Routes>
  )
}

export default App