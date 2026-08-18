import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

//
export default function GuestRoute(){
    const { isLoggedIn } = useContext(AuthContext);
    if(isLoggedIn) return <Navigate to="/chat" replace/>
    return  <Outlet />
}