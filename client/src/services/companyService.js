import api from "./api";

// Add Company
export const addCompany = async (companyData) => {
  const response = await api.post("/company", companyData);
  return response.data;
};

// Get All Companies
export const getCompanies = async () => {
  const response = await api.get("/company");
  return response.data;
};