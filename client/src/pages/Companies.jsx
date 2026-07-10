import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getCompanies } from "../services/companyService";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await getCompanies();
      setCompanies(response.companies);
    } catch (error) {
      console.log(error);
      alert("Failed to load companies");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4">Companies</h2>

        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Package</th>
              <th>Location</th>
              <th>Deadline</th>
            </tr>
          </thead>

          <tbody>
            {companies.map((company) => (
              <tr key={company._id}>
                <td>{company.companyName}</td>
                <td>{company.role}</td>
                <td>₹{company.package}</td>
                <td>{company.location}</td>
                <td>
                  {new Date(company.deadline).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Companies;