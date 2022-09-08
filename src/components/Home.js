import React from "react";
import pic from "./img/banner.svg";
import Brains from "./img/brainlogo.svg";
import pic_mb from "./img/banner_mb.svg";
import './Home.css';
import Login from "./Login";
import {Button} from '@mui/material'
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  // Somewhere in your code, e.g. inside a handler:
  

  return (
   <>
  
     <div className="loginBackground fssh01">
      <div className="content_960 fssa01">
        <img src={Brains} alt="" className="fssa02" />
        <h2 style={{marginLeft:'5%'}} className="fssa03">Easy Twogether</h2>
      </div>
      <div className="loginleft">
       <img src={pic} alt="" className="content_961"/> 
       <img src={pic_mb} alt="" className="content_960"/> 
      
      </div>


      <div className="loginright">
     <Login/>
      </div>
      <Button
        variant="contained"
        className="getstartedbtn content_960"
        onClick={() => navigate("./Login")}
      >
        get started
      </Button>

      
    </div>
   </>
  );
}

export default Home;
