import { useContext, useState } from "react";
import { getUsers } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Context
  const { setCurrentUser } = useContext(AuthContext);

  // Navigate
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    //
    const usersData = await getUsers();
    console.log(usersData);
    //
    const foundUser = usersData.find(
      (user) => user.email === email && user.password === password,
    );

    if (foundUser){
        // tại sao không lưu là foundUser mà lại thêm JSON.stringify làm gì ?
        // vì foundUser là object {} mà localStorage chỉ lưu string nên mình phải chuyển lại nha.
        // nếu sau này getItem muốn lấy lại là object thì dùng JSON.parse(...)
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        setCurrentUser(foundUser);
        // navigate("/chat"); không cần nữa vì đã sử lý trong file GuestRoute
    }
    else console.log("Email or password is fails");
  }

  return (
    <div className="login-layout min-h-screen w-full bg-blue-400 flex items-center justify-center">
      <div className="login-content w-full max-w-md border-2 border-solid border-white rounded p-6">
        <div className="text-center">
          <div className="logo flex justify-center items-center gap-4 p-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://i.pinimg.com/736x/34/1b/e4/341be4fbb1016c9a68881205f5c33133.jpg"
              alt=""
            />
            <h3 className="text-xl font-bold">Logo</h3>
          </div>
          <h1 className="text-2xl font-bold p-5">Welcome back</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <span className="block mb-1">Email:</span>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 bg-white px-2 py-1 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password mt-4">
            <span className="block mb-1">Password:</span>
            <input
              type="password"
              className="w-full rounded-md border border-gray-300 bg-white px-2 py-1 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="mt-5 w-full rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
