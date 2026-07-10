import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getAllApplications,
  updateApplicationStatus,
} from "../services/applicationService";

function ManageApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await getAllApplications();
      setApplications(response.applications);
    } catch (error) {
      console.log(error);
      alert("Failed to load applications");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await updateApplicationStatus(id, status);

      alert(response.message);

      fetchApplications();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to update status"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4">Manage Applications</h2>

        {applications.length === 0 ? (
          <div className="alert alert-warning">
            No applications found.
          </div>
        ) : (
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Student</th>
                <th>Email</th>
                <th>Company</th>
                <th>Job Title</th>
                <th>CGPA</th>
                <th>Status</th>
                <th>Update Status</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application) => (
                <tr key={application._id}>
                  <td>{application.student.name}</td>

                  <td>{application.student.email}</td>

                  <td>{application.job.company.companyName}</td>

                  <td>{application.job.title}</td>

                  <td>{application.student.cgpa}</td>

                  <td>
                    <span
                      className={
                        application.status === "Selected"
                          ? "badge bg-success"
                          : application.status === "Rejected"
                          ? "badge bg-danger"
                          : "badge bg-warning text-dark"
                      }
                    >
                      {application.status}
                    </span>
                  </td>

                  <td>
                    <select
                      className="form-select"
                      value={application.status}
                      onChange={(e) =>
                        handleStatusChange(
                          application._id,
                          e.target.value
                        )
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Selected">Selected</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default ManageApplications;