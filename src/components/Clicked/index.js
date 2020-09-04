import React from "react";
import "./style.css";

function Clicked(props) {
  return (
    <div
      role="img"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`clicking`}
    />
  );
}

export default Clicked;