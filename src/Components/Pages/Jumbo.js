import React from "react";
import Button from "../Button";

import "./Jumbo.css";

const Jumbo = () => {
  return (
    <div className="cont1">
      <div className="cont">
        <div className="header">
          <div className="header1"> Enjoy Endless Possibilities</div>
          <div className="header2"> The world is yours to discover </div>
          <div className="bb">
            <Button stylecolor="blue" name="Sign up" />
          </div>
        </div>
        <div className="imgdiv">
          <img className="image1" src="\images\World-Flags-Globe.svg" alt=" " />
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
