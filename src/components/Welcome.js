import React from "react";
import pic from "./img/getstarted.svg";
import "@fontsource/poppins";
import pic_mb from "./img/getstarted_mb.svg";
import subimg from "./img/subimg.svg";
import './Welcome.css';
// import Appointment from "./Appointment";
import {Button} from '@mui/material'
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  // Somewhere in your code, e.g. inside a handler:
  

  return (
   <>
  
     <div className="loginBackground fssw06">
      <div className="content_960 fssa01 fssw01">
        
        <h2 className="fssa03 fssw02">Connect with specialists right from the comfront of your home via video call, audio call or live chat</h2>
      </div>
      <div className="loginleft">
       <img style={{width: '584px'}} src={pic} alt="" className="content_961"/> 
       <img src={pic_mb} alt="" className="content_960"/> 
       
      </div>
      

      <div className="loginright">
     <h1 className="fssw04">Easy Twogether</h1>
     <p className="fssw05">Connect with specialists right from the comfront of your home via video call, audio call or live chat</p>
     <img style={{width: '428px'}} src={subimg} alt="" className="content_961"/> 
     
      </div>
      <Button
        variant="contained"
        className="fssw03 content_960"
        onClick={() => navigate("./../../Appointment")}
      >
        Next
      </Button>

      
    </div>
  <div className="fssw07">
    <Button
        variant="contained"
        className="fssw03 content_961"
        onClick={() => navigate("./../Appointment")}
      >
        Next
      </Button>
  </div>
   </>
  );
}

export default Home;
