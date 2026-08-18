import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

//
export default function AdminRoute(){
    const { currentUser } = useContext(AuthContext);
    console.log("AdminRoute currentUser:", currentUser);
  console.log("AdminRoute role:", currentUser?.role);
    if(currentUser?.role === "user") return <Navigate to="/chat" replace/>
    // Cái ?. ở trên có nghĩa là bên trái (currentUser) có giá trị thì mới lấy thuộc tính (role) bên phải, nếu kh có giá trị thì sẽ trả về underfined thay vì báo lỗi
    return <Outlet />
}