import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Replace with your backend API base URL
  timeout: 10000, // Timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
