import Home from './Pages/Home'
import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,Routes,Route,
} from "react-router-dom";
import Header from './Components/Header';
import Nav from './Components/Nav';


function App() {

  return (
    <Router>
      <Nav/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
