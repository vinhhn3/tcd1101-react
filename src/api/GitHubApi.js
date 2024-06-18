import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com",
});

const getUsers = async () => {
  const response = await axiosClient.get("/users");
  return response.data;
};

export { getUsers };
