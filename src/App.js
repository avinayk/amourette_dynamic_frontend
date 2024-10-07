import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Editprofile from "./pages/Editprofile";
import Membership from "./pages/Membership";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Singleevent from "./pages/Singleevent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/singleevent" element={<Singleevent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
