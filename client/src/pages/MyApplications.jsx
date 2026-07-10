import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getMyApplications } from "../services/applicationService";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const response = await getMyApplications();
      setApplications(response.applications);
    } catch (error) {
      console.log(error);
      alert("Failed to load applications");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2>My Applications</h2>

        {applications.length === 0 ? (
          <div className="alert alert-warning mt-3">
            No applications found.
          </div>
        ) : (
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Company</th>
                <th>Job</th>
                <th>Eligibility</th>
                <th>Last Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application) => (
                <tr key={application._id}>
                  <td>{application.job.company.companyName}</td>
                  <td>{application.job.title}</td>
                  <td>{application.job.eligibility}</td>
                  <td>
                    {new Date(
                      application.job.lastDate
                    ).toLocaleDateString()}
                  </td>
                  <td>{application.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default MyApplications;