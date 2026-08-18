import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

// Sau này sẽ tạo ra 2 navbar riêng cho 2 layout là main layout và admin layout
export default function MainNavbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useState("");

  //test
  const { currentUser, isLoggedIn, logout} = useContext(AuthContext);
  return ( 
    <div className="main-navbar bg-slate-700 text-white">
      <ul className="flex justify-center gap-10 p-4 items-center ">
        <div className="flex items-center gap-1">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.pinimg.com/736x/34/1b/e4/341be4fbb1016c9a68881205f5c33133.jpg"
            alt=""
          />
          <h3>Logo</h3>
        </div>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/users/1">Users</Link>
        </li>
        <li className="relative">
          {/* cái button thêm vào mà không thấy nút mà thấy bình thường là tại vì tailwind đã reset css button rồi
                background-color: transparent;
                border-width: 0;
                padding: 0;
                font: inherit;
            Nếu muốn hiện nút bình thường: flex items-center gap-1 rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-600
            */}
          <button
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setOpenProfile(!openProfile)}
          >
            {currentUser ? (
              <span>{currentUser.name} 🙉</span>
            ) : (
              <Link to="/login">Login</Link>
            )} 
            <span
              className={`transition-transform ${openProfile ? "rotate-180" : ""}`}
            >
              🔽
            </span>
          </button>

          {/* Nếu openProfile là true thì render ra */}
          {openProfile && (
            <ul className="absolute top-full right-0 mt-2 w-32 rounded-md bg-slate-600 p-2 shadow-lg">
              <li>
                <Link
                  className=" block w-full rounded px-3 py-1 hover:bg-slate-500"
                  to="/profile"
                  onClick={() => setOpenProfile(false)}
                >
                  Profile
                </Link>
              </li>
              <li>
                {/* <Link
                  className=" block w-full rounded px-3 py-1 hover:bg-slate-500"
                  to="/logout"
                  onClick={() => setOpenProfile(false)}
                >
                  Logout
                </Link> */}
                <button onClick={logout} className="w-full px-3 py-1 hover:bg-slate-500 text-left rounded">
                  Logout
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
      {/* <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <br /> <hr />
                <li>
                    <Link to="/chat">Chat</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/users/1">User profile</Link>
                </li>
                <br /> <hr />
                <li>
                    <Link to="/admin/dashboard">Manager dashboard</Link>
                </li>
                <li>
                    <Link to="/admin/messages">Manager messages</Link>
                </li>
                <li>
                    <Link to="/admin/users">Manager users</Link>
                </li>
            </ul> */}
    </div>
  );
}
