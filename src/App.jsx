// import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
//
import Navbar from "./components/Navbar";
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

// Local
function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-blue-600">Hello World!</h1>

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
      <Route element={<MainLayout />}>
      <Route path="chat" element={<ChatPage />} />

      {/* Dùng để xem thông tin của bản thân */}
      <Route path="profile" element={<ProfilePage />} />

      {/* Dùng để xem profile user của người khác */}
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
