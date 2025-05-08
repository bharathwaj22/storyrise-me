import React from 'react'
import "../assets/css/bulb.css";
import Lightoff from "../assets/images/abouts/lightoff.png";



function Bulb() {
  return (
    <div className="real-bulb-wrapper">
    <div className="real-bulb">
      <img src={Lightoff} alt="Bulb" className="bulb-image" />
      <div className="hover-text">Let the ideas shine!</div>
    </div>
  </div>
  
  
  )
}

export default Bulb