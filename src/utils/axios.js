import axios from "axios";
// configuration
const baseURL = "https://library-management-app-node.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
      return request;
    } else {
      return request;
    }
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
