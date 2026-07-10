import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          Placement Portal
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            {/* Student Navbar */}
            {user?.role === "student" && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/student">
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/jobs">
                    Jobs
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/companies">
                    Companies
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/applications">
                    My Applications
                  </NavLink>
                </li>
              </>
            )}

            {/* Admin Navbar */}
            {user?.role === "admin" && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/add-company">
                    Add Company
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/add-job">
                    Add Job
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/manage-applications">
                    Manage Applications
                  </NavLink>
                </li>
              </>
            )}

            {/* Welcome */}
            {user && (
              <li className="nav-item me-3">
                <span className="text-white fw-semibold">
                  Welcome, {user.name}
                </span>
              </li>
            )}

            {/* Logout */}
            {user && (
              <li className="nav-item">
                <button
                  className="btn btn-light text-danger fw-bold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;