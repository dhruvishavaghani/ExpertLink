import Home from './Pages/Home'
import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,Routes,Route,
} from "react-router-dom";
import Header from './Components/Header';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {

  return (
    <Router>
      <Nav/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
