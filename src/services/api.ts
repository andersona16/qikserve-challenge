import axios from "axios";

const api = axios.create({
  baseURL: "/challenge",
});

export const fetchRestaurantData = async () => {
  const response = await api.get("venue/9");
  return response.data;
};
