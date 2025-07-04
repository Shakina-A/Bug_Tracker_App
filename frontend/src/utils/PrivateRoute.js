import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { children } from "react";

const PrivateRoute=({Children})=>{
    const {user}=useAuth();
    return user? children:<Navigate to="/login/"/>;
};
export default PrivateRoute;