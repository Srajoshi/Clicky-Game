import React from "react";

function Navbar(props) {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper container">
          <a href="/" className='brand-logo text-align-left'>Clicky Game</a>
          <ul className='right'>
            <li style={{ paddingRight: "20px" }}>Score: {props.score}</li>
            <li style={{ paddingLeft: "20px" }}>Top Score: {props.topScore}</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}



export default Navbar;