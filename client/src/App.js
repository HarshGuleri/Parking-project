import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'; // Correct path to Navbar.js
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import ParkingSpace from './Components/ParkingSpace';
import Login from './Components/Login'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
          <Route path="/login" element={<Login />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
   
      <ParkingSpace/>
      <Footer/>
    </div>
  );
}

export default App;
