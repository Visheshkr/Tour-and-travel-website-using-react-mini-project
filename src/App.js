import React from 'react';
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main';
import Contact from "./Components/Contact";
import News from "./Components/News";
import About from "./Components/About";
import Packages from "./Components/Packages";
import Pages from "./Components/Pages";
import Shop from "./Components/Shop";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
    
    <Router>
    <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
        <Route exact path='/packages' element={<Packages/>}/>
        <Route exact path='/shop' element={<Shop/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/pages' element={<Pages/>}/>
        <Route exact path='/news' element={<News/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
    <Main/>
    <Footer/>
      </Router>
    
    </>
  )
}

export default App
