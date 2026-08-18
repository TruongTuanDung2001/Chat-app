import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

//
export default function GuestRoute(){
    const { isLoggedIn, currentUser } = useContext(AuthContext);
    if(isLoggedIn){
        // Cái ?. ở trên có nghĩa là bên trái (currentUser) có giá trị thì mới lấy thuộc tính (role) bên phải, nếu kh có giá trị thì sẽ trả về underfined thay vì báo lỗi
        if(currentUser?.role === "user"){
            return <Navigate to="/chat" replace/>
        }
        return <Navigate to="/admin/dashboard" replace/>
    }
    return  <Outlet />
}

