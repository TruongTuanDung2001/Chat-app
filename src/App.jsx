// import { Link } from "react-router-dom";
import { Link, Navigate, Route, Routes } from "react-router-dom";
//
import MainNavbar from "./components/MainNavbar";
import AdminNavbar from "./components/AdminNavbar";
//
import LoginPage from "./pages/Login/Login";
import ChatPage from "./pages/Chat/Chat";
import ProfilePage from "./pages/Profile/Profile";
import UserProfile from "./pages/UserProfile/UserProfile";
//
import DashboardAdminPage from "./pages/Admin/Dashboard";
import MessagesAdminPage from "./pages/Admin/Messages";
import UsersAdminPage from "./pages/Admin/Users";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import Users from "./pages/Users/Users";

// Local
function App() {
  return (
    <div>
      {/* <MainNavbar /> */}
      <Link to="/chat">Chat</Link> <br />
      <Link to="/admin">Admin layout</Link>
      {/* <h1 className="text-2xl font-bold text-blue-600">Hello World!</h1> */}
      {/* pages */}
      <AppRoutes />
    </div>
  );
}

// Manager router page
function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* user */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/chat" replace/> } />
        <Route path="chat" element={<ChatPage />} />
        {/* Dùng để xem thông tin của bản thân */}
        <Route path="profile" element={<ProfilePage />} />

        {/* Dùng để xem danh sách tất cả users, xem thôi kh được chỉnh sửa */}
        <Route path="users" element={<Users />} />

        {/* Dùng để xem profile 1 user trong danh sách users ở trên theo id user*/}
        <Route path="users/:id" element={<UserProfile />} />

      </Route>

      {/* admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<DashboardAdminPage />} />
        <Route path="messages" element={<MessagesAdminPage />} />
        <Route path="users" element={<UsersAdminPage />} />
      </Route>
    </Routes>
  );
}

// end
export default App;
