// import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-blue-600">Hello World!</h1>

      {/* pages */}
      <Router />
    </div>
  );
}

// function router dom
function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

// end
export default App;
export { Router };
