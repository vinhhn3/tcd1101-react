import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com",
});

const getUsers = async () => {
  const response = await axiosClient.get("/users");
  return response.data;
};

const searchUsers = async (text) => {
  const response = await axiosClient.get(`/search/users?q=${text}`);
  return response.data.items;
};

export { getUsers, searchUsers };
