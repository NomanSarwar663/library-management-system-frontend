import axios from "axios";
// configuration
const baseURL = "http://localhost:8000/";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default axiosInstance;
