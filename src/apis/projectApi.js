import api from "./serverApi";

export const addProjectApi = (project) => {
  // api.defaults.headers["Content-Type"] = "multipart/form-data";
  return api.post("/projects/", project, {
    headers : { "Content-Type" : "multipart/form-data"}
  });
};

// {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },

export const getProjectsApi = () => {
  return api.get("/projects/");
};

export const deleteProjectApi = (projectId) => {
  return api.delete(`/projects/${projectId}`);
};

export const updateProjectApi = (projectId, project) => {
  return api.put(`/projects/${projectId}`, project);
};
