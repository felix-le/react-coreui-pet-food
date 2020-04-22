import axios from "axios";

export const apiFetchUsers = async () => {
  return axios.get("http://localhost:4000/users/");
};

export const apiFecthComments = async () => {
  return axios.get("http://localhost:4000/comments/");
};
