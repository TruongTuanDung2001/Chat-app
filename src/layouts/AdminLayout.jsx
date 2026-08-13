import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AdminLayout(){
    return (
        <div className="admin-layout">
            <Navbar />

            <Outlet />
        </div>
    )
}