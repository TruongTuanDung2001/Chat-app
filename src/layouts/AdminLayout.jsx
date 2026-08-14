import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

export default function AdminLayout(){
    return (
        <div className="admin-layout">
            <MainNavbar />

            <Outlet />
        </div>
    )
}