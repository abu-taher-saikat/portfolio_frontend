import api from "./serverApi";

export const loginApi = (authData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return api.post("/users/login", authData, config);
};


