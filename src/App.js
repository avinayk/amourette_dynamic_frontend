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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
