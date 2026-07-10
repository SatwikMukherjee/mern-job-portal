import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import MyApplications from "./pages/MyApplications";
import AddCompany from "./pages/AddCompany";
import AddJob from "./pages/AddJob";
import ManageApplications from "./pages/ManageApplications";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/student"
        element={
          <ProtectedRoute role="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/companies"
        element={
          <ProtectedRoute>
            <Companies />
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications"
        element={
          <ProtectedRoute>
            <MyApplications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-company"
        element={
          <ProtectedRoute role="admin">
            <AddCompany />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-job"
        element={
          <ProtectedRoute role="admin">
            <AddJob />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-applications"
        element={
          <ProtectedRoute role="admin">
            <ManageApplications />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;