import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <>
      <button
        style={{
          boxShadow: `inset 0px 1px 0px 0px ${props.stylecolor}`,
          border: `1px solid ${props.stylecolor}`,
          textShadow: `0px 1px 0px ${props.stylecolor}`,
        }}
        className={`btn ${props.stylecolor} `}
      >
        {props.name}{" "}
      </button>
    </>
  );
};

export default Button;
