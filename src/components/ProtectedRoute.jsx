import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return <Outlet />;
}

/**
    - Khi nào dùng useNavigate() và <Navigate /> : điều là router component để chuyển trang 
    - useNavigate dùng để chủ động chuyển trang, như là xong 1 logic nào đó thì chuyển. vd: login thành công chuyển, logout thành công chuyển
    - <Navigate /> là dựa vào trạng thái hiện tại router này được phép tồn tại hay không. vd: chưa login, đã login, không phải admin ... nằm trong if 
 */