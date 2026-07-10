import api from "./api";

// Apply Job
export const applyJob = async (jobId) => {
  const response = await api.post("/application", {
    job: jobId,
  });

  return response.data;
};

// Student Applications
export const getMyApplications = async () => {
  const response = await api.get("/application/my");
  return response.data;
};

// Admin - Get All Applications
export const getAllApplications = async () => {
  const response = await api.get("/application");
  return response.data;
};

// Admin - Update Status
export const updateApplicationStatus = async (id, status) => {
  const response = await api.put(`/application/${id}`, {
    status,
  });

  return response.data;
};