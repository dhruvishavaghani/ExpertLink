import Home from "./Pages/Home";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Pages/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import { useLoginContext } from "./Context/LoginContext";
import Service from "./Components/Service";
import Profile from "./Components/Profile";
import AllServices from "./Components/AllServices";
import ServiceForm from "./Components/ServiceForm";
import TopUsers from "./Pages/TopUsers";


function App() {

  const { isLoggedIn } = useLoginContext();

  return (
    <BrowserRouter>
      {location.pathname != "/dashboard" && location.pathname!= '/service'&& location.pathname!= '/allservices' && location.pathname!= '/profile'&& location.pathname!='/serviceform' && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
          {/* isLoggedIn?(<Dashboard />):(<Login/>)} /> */}
        <Route path="/service" element={<Service />} />
        <Route path="/allservices" element={<AllServices/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/serviceform" element={<ServiceForm/>}/>
        <Route path="/topusers" element={<TopUsers/>}/>
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
    </BrowserRouter>
  );
}

export default App;
