import { useContext } from "react";
import { AuthContext } from "../Contexts/JWTContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
