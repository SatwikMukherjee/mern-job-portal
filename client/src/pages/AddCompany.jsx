import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCompany } from "../services/companyService";
import Navbar from "../components/Navbar";

function AddCompany() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    package: "",
    location: "",
    deadline: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addCompany(formData);

      alert(response.message);

      navigate("/companies");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to add company"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="card shadow p-4">

          <h2 className="mb-4">Add Company</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                className="form-control"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Role</label>
              <input
                type="text"
                name="role"
                className="form-control"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Package</label>
              <input
                type="number"
                name="package"
                className="form-control"
                value={formData.package}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Location</label>
              <input
                type="text"
                name="location"
                className="form-control"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Deadline</label>
              <input
                type="date"
                name="deadline"
                className="form-control"
                value={formData.deadline}
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
              Add Company
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default AddCompany;