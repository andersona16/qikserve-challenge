import axios from "axios";

const baseURL = "/";
export const api = axios.create({
  baseURL: baseURL,
});

export const fetchRestaurantData = async () => {
  const response = await api.get("/venue/9");
  return response.data;
};

export const fetchRestaurantMenu = async () => {
  const response = await api.get("/menu");
  return response.data;
};
