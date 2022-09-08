import React from "react"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import Welcome from "./Welcome"
import Login from "./Login"
import Appointment from "./Appointment"
import Signup from "./Signup"
import Drawer from "./Drawer"
import Doctor from "./Doctor"
import DoctorProfile from "./Doctors/DoctorProfile"



const App = () => {
  return (
    <BrowserRouter>
      
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Drawer" element={<Drawer />} />
            <Route path="/Doctor" element={<Doctor />} />
            <Route path="/Doctors/DoctorProfile" element={<DoctorProfile />} />
        
          </Routes>
          
        
    </BrowserRouter>
  );
};

export default App;