import api from "./api";

// Get All Jobs
export const getAllJobs = async () => {
  const response = await api.get("/job");
  return response.data;
};

// Add Job
export const addJob = async (jobData) => {
  const response = await api.post("/job", jobData);
  return response.data;
};