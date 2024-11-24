import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'; // Correct path to Navbar.js
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import ParkingSpace from './Components/ParkingSpace';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUp/>
      <ParkingSpace/>
      <Footer/>
    
    </div>
  );
}

export default App;
