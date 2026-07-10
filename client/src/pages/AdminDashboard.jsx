import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getDashboard } from "../services/adminService";

function AdminDashboard() {
  const [dashboard, setDashboard] = useState({
    totalStudents: 0,
    totalCompanies: 0,
    totalJobs: 0,
    totalApplications: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await getDashboard();

      setDashboard({
        totalStudents: response.totalStudents,
        totalCompanies: response.totalCompanies,
        totalJobs: response.totalJobs,
        totalApplications: response.totalApplications,
      });
    } catch (error) {
      console.log(error);
      alert("Failed to load dashboard");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4">Admin Dashboard</h2>

        <div className="row">

          <div className="col-md-3 mb-3">
            <div className="card bg-primary text-white shadow">
              <div className="card-body text-center">
                <h1>{dashboard.totalStudents}</h1>
                <h5>Total Students</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white shadow">
              <div className="card-body text-center">
                <h1>{dashboard.totalCompanies}</h1>
                <h5>Total Companies</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card bg-warning shadow">
              <div className="card-body text-center">
                <h1>{dashboard.totalJobs}</h1>
                <h5>Total Jobs</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card bg-danger text-white shadow">
              <div className="card-body text-center">
                <h1>{dashboard.totalApplications}</h1>
                <h5>Total Applications</h5>
              </div>
            </div>
          </div>

        </div>

        <div className="card mt-4 shadow">
          <div className="card-body">
            <h4>Welcome Admin 👋</h4>

            <p>
              Use the navigation bar to:
            </p>

            <ul>
              <li>Add Company</li>
              <li>Add Job</li>
              <li>Manage Applications</li>
              <li>Monitor Placement Statistics</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}

export default AdminDashboard;