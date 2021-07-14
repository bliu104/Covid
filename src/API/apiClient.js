import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://corona.lmao.ninja/v2",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
