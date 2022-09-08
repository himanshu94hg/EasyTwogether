import React from 'react'
import {Box , Button} from '@mui/material'
import "./Drawer.css"
import { useNavigate } from "react-router-dom";

function Drawer () {

  let Next = useNavigate();


  return (
    <>
    <div className='fssd06'>
 <Box
      p={3}
      className="fssd01"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",

      }}
    >
    
    <h1 className='fssd02'>BOOK AN APPOINTMENT</h1>
    <p className='fssd03'>Get the option to choose a specialist according to your specifications</p>
    <Button
        variant="contained"
        className="fssd04"
        onClick={() => Next("./../Doctor")}
      >
        Next
      </Button>
<div className='fssd05'>
      <p>Are you a specialist?</p>
      <p style={{marginLeft:'15px', fontStyle:'italic'}}><b>Get Here </b></p>
</div>
    </Box>

    </div>
    </>
  )
}

export default Drawer