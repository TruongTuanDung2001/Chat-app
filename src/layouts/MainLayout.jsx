import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

export default function MainLayout(){
    return (
        <div className="main-layout">
            <MainNavbar />

            <Outlet />
        </div>
    )
}