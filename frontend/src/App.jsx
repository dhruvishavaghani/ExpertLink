import Home from "./Pages/Home";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Pages/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import { useLoginContext } from "./Context/LoginContext";

function App() {

  const { isLoggedIn } = useLoginContext();

  return (
    <Router>
      {location.pathname != "/dashboard" && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isLoggedIn?(<Dashboard />):(<Login/>)} />
      </Routes>

      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ fontSize: "1.3rem" }}
      />
    </Router>
  );
}

export default App;
