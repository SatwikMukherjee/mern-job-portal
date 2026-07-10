import { useEffect, useState } from "react";
import { getAllJobs } from "../services/jobService";
import { applyJob } from "../services/applicationService";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
      setJobs(response.jobs);
    } catch (error) {
      console.log(error);
      alert("Failed to load jobs");
    }
  };

  const handleApply = async (jobId) => {
    try {
      const response = await applyJob(jobId);

      alert(response.message);

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Application Failed"
      );
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Available Jobs</h2>

      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-6 mb-4" key={job._id}>
            <div className="card shadow">
              <div className="card-body">

                <h3>{job.title}</h3>

                <hr />

                <p>
                  <strong>Company:</strong>{" "}
                  {job.company.companyName}
                </p>

                <p>
                  <strong>Role:</strong>{" "}
                  {job.company.role}
                </p>

                <p>
                  <strong>Package:</strong>{" "}
                  ₹{job.company.package}
                </p>

                <p>
                  <strong>Location:</strong>{" "}
                  {job.company.location}
                </p>

                <p>
                  <strong>Eligibility:</strong>{" "}
                  {job.eligibility} CGPA
                </p>

                <p>
                  <strong>Last Date:</strong>{" "}
                  {new Date(job.lastDate).toLocaleDateString()}
                </p>

                <p>{job.description}</p>

                <button
                  className="btn btn-success"
                  onClick={() => handleApply(job._id)}
                >
                  Apply
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;