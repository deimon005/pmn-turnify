import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

// Worker
import WorkerDashboard from './pages/worker/WorkerDashboard'
import WorkerCalendar from './pages/worker/WorkerCalendar'
import WorkerOvertime from './pages/worker/WorkerOvertime'
import WorkerSwapShift from './pages/worker/WorkerSwapShift'
import WorkerPermission from './pages/worker/WorkerPermission'
import WorkerComplaint from './pages/worker/WorkerComplaint'

// Supervisor
import SupervisorEmployeeList from './pages/supervisor/SupervisorEmployeeList'
import SupervisorEmployeeCalendar from './pages/supervisor/SupervisorEmployeeCalendar'
import SupervisorPublishOvertime from './pages/supervisor/SupervisorPublishOvertime'
import SupervisorOvertimeApplicants from './pages/supervisor/SupervisorOvertimeApplicants'

// HR
import HRDashboard from './pages/hr/HRDashboard'
import HREmployeeManagement from './pages/hr/HREmployeeManagement'
import HRComplaints from './pages/hr/HRComplaints'
import HRPermissions from './pages/hr/HRPermissions'
import HRReports from './pages/hr/HRReports'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      {/* Worker routes */}
      <Route path="/dashboard/worker" element={<WorkerDashboard />}>
        <Route index element={<WorkerCalendar />} />
        <Route path="calendar" element={<WorkerCalendar />} />
        <Route path="overtime" element={<WorkerOvertime />} />
        <Route path="swap" element={<WorkerSwapShift />} />
        <Route path="permission" element={<WorkerPermission />} />
        <Route path="complaint" element={<WorkerComplaint />} />
      </Route>

      {/* Supervisor routes */}
      <Route path="/dashboard/supervisor" element={<SupervisorEmployeeList />} />
      <Route
        path="/dashboard/supervisor/employees/:id/calendar"
        element={<SupervisorEmployeeCalendar />}
      />
      <Route
        path="/dashboard/supervisor/overtime/publish"
        element={<SupervisorPublishOvertime />}
      />
      <Route
        path="/dashboard/supervisor/overtime/applicants"
        element={<SupervisorOvertimeApplicants />}
      />

      {/* HR routes */}
      <Route path="/dashboard/hr" element={<HRDashboard />}>
        <Route index element={<Navigate to="employees" replace />} />
        <Route path="employees" element={<HREmployeeManagement />} />
        <Route path="complaints" element={<HRComplaints />} />
        <Route path="permissions" element={<HRPermissions />} />
        <Route path="reports" element={<HRReports />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
