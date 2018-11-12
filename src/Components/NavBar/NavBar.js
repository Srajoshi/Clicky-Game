import React from "react";
import "./NavBar.css";


function Navbar(props) {
  return (
    <div className="nav-wrapper container navbar-fixed navbar-dark bg-primary">
    <form className="d-inline-block">
      <nav>
        <div className="nav-wrapper container">
          <h2 className="text-align-left">Clicky Game</h2>
          <h5 className="center message">{props.text}</h5>
          <span className="text">
          <ul className="right">
            <li>Score: {props.score}</li>
            <li>Top Score: {props.topScore}</li>
          </ul>
          </span>
        </div>
      </nav>
      </form>
    </div>
  )
}



export default Navbar;