import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

//
export default function AdminRoute(){
    const { currentUser } = useContext(AuthContext);
    console.log("AdminRoute currentUser:", currentUser);
  console.log("AdminRoute role:", currentUser?.role);
    if(currentUser?.role === "user") return <Navigate to="/chat" replace/>
    return <Outlet />
}