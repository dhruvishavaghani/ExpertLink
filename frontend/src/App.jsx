import Home from './Pages/Home'
import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,Routes,Route,
} from "react-router-dom";
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Pages/Dashboard';

function App() {

  return (
    <Router>
      {location.pathname !=='/dashboard' && <Nav/>}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>

      <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      
    </Router>
  )
}

export default App
