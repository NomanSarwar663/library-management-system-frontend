import { createContext, useReducer, useEffect } from "react";
import { setSession } from "../utils/jwt";
import { useNavigate } from "react-router-dom";
// utils
import axios from "../utils/axios";

const initialState = {
  isAuthenticated: false,
  userData: null,
};

const handlers = {
  LOGIN: (_, action) => {
    const { userData } = action.payload;

    return {
      isAuthenticated: true,
      userData,
    };
  },
  //   REGISTER: (state, action) => {
  //     const { userData } = action.payload;

  //     return {
  //       ...state,
  //       isAuthenticated: true,
  //       userData,
  //     };
  //   },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    userData: null,
  }),
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  signIn: () => Promise.resolve(),
  //   signUp: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = () => {
      const accessToken = window.localStorage.getItem("accessToken");
      const userData = JSON.parse(window.localStorage.getItem("user"));
      if (accessToken && userData) {
        // const userData = userId;
        setSession(accessToken);
        dispatch({
          type: "LOGIN",
          payload: {
            isAuthenticated: true,
            userData: userData,
          },
        });
      } else {
        dispatch({
          type: "LOGOUT",
          payload: {
            isAuthenticated: false,
            userData: null,
          },
        });
      }
    };
    console.log("in useeff");
    initialize();
  }, []);

  //login api call
  const signIn = async (email, password) => {
    console.log("in Auth");
    const response = await axios.post("/login", {
      email,
      password,
    });
    const { data } = response;
    if (data && data.status === "Success") {
      const { token, user } = data;
      const userData = {
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
        email: user.email,
        phoneNo: user.phoneNo,
      };
      setSession(token);
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch({
        type: "LOGIN",
        payload: {
          userData,
        },
      });
      navigate("/books");
    }

    return data;
  };

  // Register api call
  //   const signUp = async (payload) => {
  //     const response = await axios.post("/register", { ...payload });
  //     const { data } = response;
  //     if (data && data.status === "Success") {
  //       const { accessToken, user } = data;
  //       const userData = {
  //         firstName: user.firstName,
  //         lastName: user.lastName,
  //         _id: user._id,
  //         email: user.email,
  //         phoneNo: user.phoneNo,
  //       };
  //       setSession(accessToken);
  //       localStorage.setItem("user", JSON.stringify(userData));
  //       dispatch({
  //         type: "REGISTER",
  //         payload: {
  //           userData,
  //         },
  //       });
  //     }
  //     navigate("/primary-menu");

  //     return data;
  //   };

  //   logout api call
  const logout = async () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/books");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        // signUp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
