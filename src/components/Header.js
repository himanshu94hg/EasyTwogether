import React from 'react'

function Header() {
  
    const circle_a = {
      height: "11rem",
      width: "11rem",
      backgroundColor: "rgba(46, 44, 78, 0.53)",
      borderRadius: "50%",
      // position: "fixed",
      marginLeft:"-26px",
      marginTop:"-82px"
    };
  const circle_b = {
      height: "11rem",
      width: "11rem",
      backgroundColor: "rgba(46, 44, 78, 0.53)",
      borderRadius: "50%",
      // position: "fixed",
      marginLeft:"-82px",
      marginTop:"-108px"
    };
    
  
  
  return (
    <div className="header_mb">
      <div style={circle_a}></div>
      <div style={circle_b}></div>
    </div>
  )
}


export default Header;