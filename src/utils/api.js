// src/api.js
import axios from "axios";
import { API_TOKEN, API_URL } from "./helper";

console.log("api url-->", API_URL, API_TOKEN);

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

apiClient.interceptors.response.use(
  (response) => response.data.data,
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Something went wrong";
    return Promise.reject(new Error(message));
  }
);

export const api = {
  getBlogs: () => apiClient.get(`/blogs?populate=*`),
};
