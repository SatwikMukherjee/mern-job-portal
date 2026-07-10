import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    cgpa: "",
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
      await registerUser(formData);

      alert("Registration Successful");
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            placeholder="Branch"
            name="branch"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="number"
            step="0.01"
            placeholder="CGPA"
            name="cgpa"
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100">
            Register
          </button>

        </form>

        <p className="text-center mt-3">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;