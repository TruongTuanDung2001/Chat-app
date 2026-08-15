export default function LoginPage() {
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
        <div className="">
          <div className="email">
            <span className="block mb-1">Email:</span>
            <input type="email" className="w-full rounded-md border border-gray-300 bg-white px-2 py-1 outline-none" />
          </div>
          <div className="password mt-4">
            <span className="block mb-1">Password:</span>
            <input type="password" className="w-full rounded-md border border-gray-300 bg-white px-2 py-1 outline-none" />
          </div>
          <button className="mt-5 w-full rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 cursor-pointer">Login</button>
        </div>
      </div>
    </div>
  );
}
