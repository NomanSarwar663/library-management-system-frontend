import axios from "axios";
// configuration
const baseURL = process.env.REACT_APP_API_URL;

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default axiosInstance;
