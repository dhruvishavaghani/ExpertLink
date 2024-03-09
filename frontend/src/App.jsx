import Home from "./Pages/Home";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Pages/Dashboard";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      {location.pathname != "/dashboard" && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
