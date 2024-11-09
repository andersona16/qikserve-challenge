import axios from "axios";

const api = axios.create({
  baseURL: "/challenge",
});

export default api;
