import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar container-fluid navbar-expand-lg navbar-light bg-light">
      <div className="row">
        <div className ="col-4">
        <a className="navbar-brand" href="#">Clicky Game</a>
        </div>
        <div className ="col-4 navbar-brand">
         {props.text}
        </div>
        <div className ="col-4 navbar-brand">
          Score: {props.score}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;