import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import SideBar from "./Components/SideBar";
import Projects from "./Components/Projects/Projects";

function App() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <Router>
      <AppRoutes sideBar={sideBar} setSideBar={setSideBar} />
    </Router>
  );
}

function AppRoutes({ sideBar, setSideBar }) {
  const location = useLocation();

  return (
    <div className="h-full w-full">
      {/* Conditionally render Header based on the current route */}
      {location.pathname !== "/my-projects" && (
        <Header sideBar={sideBar} setSideBar={setSideBar} />
      )}

      {/* SideBar Component */}
      <div
        className={`${
          sideBar ? "visible h-[100vh]" : "h-0 w-0 invisible"
        } fixed z-50 top-0 right-0`}
      >
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />
      </div>

      {/* Routes (Home, Projects) */}
      <div className="h-full w-full absolute top-14">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Route */}
          <Route path="/my-projects" element={<Projects />} />{" "}
          {/* Projects Route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
