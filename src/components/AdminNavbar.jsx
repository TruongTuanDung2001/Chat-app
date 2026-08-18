import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

//
export default function AdminNavbar() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="admin-navbar min-h-screen w-56 bg-slate-700 text-white  fixed left-0 top-0 z-10">
      <div className="sideBar flex min-h-screen flex-col p-4 w-full">
        <div className="logo flex items-center gap-1 border-b border-slate-500 pb-4">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.pinimg.com/736x/34/1b/e4/341be4fbb1016c9a68881205f5c33133.jpg"
            alt=""
          />
          <h3>Logo</h3>
        </div>

        <ul className="actions mt-6 space-y-4">
          <li>
            <Link
              to="/admin/dashboard"
              className="block rounded px-4 py-2 hover:bg-slate-500"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className="block rounded px-4 py-2 hover:bg-slate-500"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/messages"
              className="block rounded px-4 py-2 hover:bg-slate-500"
            >
              Messages
            </Link>
          </li>
        </ul>

        <div className="logout mt-auto ">
          {/* <Link
            to="/logout"
            className="block rounded px-4 py-2 bg-red-500 hover:bg-red-600"
          >
            Logout
          </Link> */}
          <button onClick={logout} className="block w-full rounded px-4 py-2 bg-red-500 hover:bg-red-600">Logout</button>
        </div>
      </div>
      {/* 
            - min-h-screen là chiều cao hết chiều dọc
            - flex-col là xếp bên trong theo chiều dọc | logout dùng mt-auto là nó sẽ nằm cuối theo chiều dọc, nhớ chỉnh chiều dọc hết màn hình
            - space-y-2 là cách dọc các phần tử theo chiều dọc
            - fixed left-0 top-0 là để sidebar cố định khi scroll
            - 
        */}
    </div>
  );
}
