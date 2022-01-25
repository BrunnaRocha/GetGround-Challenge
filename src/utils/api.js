import axios from "axios";

const instance = axios.create({
  baseURL: "http://nyx.vima.ekt.gr:3000",
});

export const PostRequest = async (path, body) => {
  return await instance.post(path, body);
};
