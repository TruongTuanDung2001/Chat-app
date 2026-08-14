import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminLayout(){
    return (
        <div className="admin-layout">
            <AdminNavbar />

            <Outlet />
        </div>
    )
}