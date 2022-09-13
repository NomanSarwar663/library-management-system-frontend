import axios from "./axios";
//-------------------------------------------------------------------

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common.Authorization;
  }
};

// checks token on frontend based on API response
const checkToken = (error) => {
  if (!!error.message) return false;
  if (
    (error.message.includes("token") ||
      error.message.includes("invalid") ||
      error.message.includes("malformed")) &&
    error.statusCode === 500
  ) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    return false;
  }
};

export { setSession, checkToken };
