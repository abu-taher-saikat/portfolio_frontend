import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://frozen-wave-51413.herokuapp.com"
});

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default api;

// export const domainName= "http://localhost:5000/";
export const domainName= "https://frozen-wave-51413.herokuapp.com/";
