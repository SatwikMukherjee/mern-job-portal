import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { addJob } from "../services/jobService";
import { getCompanies } from "../services/companyService";

function AddJob() {
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);

  const [formData, setFormData] = useState({
    company: "",
    title: "",
    eligibility: "",
    lastDate: "",
    description: "",
  });

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      const response = await getCompanies();
      setCompanies(response.companies);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addJob(formData);

      alert(response.message);

      navigate("/jobs");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to add job"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="card shadow p-4">

          <h2 className="mb-4">Add Job</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Company</label>

              <select
                name="company"
                className="form-control"
                value={formData.company}
                onChange={handleChange}
                required
              >
                <option value="">Select Company</option>

                {companies.map((company) => (
                  <option
                    key={company._id}
                    value={company._id}
                  >
                    {company.companyName}
                  </option>
                ))}

              </select>
            </div>

            <div className="mb-3">
              <label>Job Title</label>

              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Eligibility (CGPA)</label>

              <input
                type="number"
                name="eligibility"
                className="form-control"
                value={formData.eligibility}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Last Date</label>

              <input
                type="date"
                name="lastDate"
                className="form-control"
                value={formData.lastDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Description</label>

              <textarea
                name="description"
                rows="4"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary">
              Add Job
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default AddJob;