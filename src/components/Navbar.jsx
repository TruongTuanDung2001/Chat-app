import { Link } from "react-router-dom";

// Sau này sẽ tạo ra 2 navbar riêng cho 2 layout là main layout và admin layout
export default function Navbar(){
    return (
        <div className="navbar">
            <ul>
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
            </ul>
        </div>
    )
}