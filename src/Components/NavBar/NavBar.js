import React from "react";
import "./NavBar.css";


function Navbar(props) {
  return (

    // <form className="d-inline-block">
    <nav className="nav container navbar-fixed bg-primary">
      <ul className="navbar ml-3">
        <li className= "nav-item"><h2 className="text-align-left">Clicky Game </h2></li>
        </ul>
        <ul className="navbar mr-auto">
        {/* <li className="message" ><h5 className="center message"> {props.text}</h5></li> */}
        <li nav-item ><h4 className="scores">Score: {props.score} | </h4></li>
        <li nav-item ><h4 className="scores">Top Score: {props.topScore} |</h4></li>
        <li className="message mr-auto" ><h5 className="message"> {props.text}</h5></li>
      </ul>
    </nav >
    //   </form>

  )
}



export default Navbar;