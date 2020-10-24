import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import Button from "../Button";
import "./Navbar.css";
const Navbar = () => {
  const [times, setTimes] = useState(false);

  const checkpop = () => {
    if (times) {
      setTimes(false);
    }
  };

  const reportWindowSize = () => {
    if (window.innerWidth > 682) {
      setTimes(false);
    }
  };

  window.addEventListener("resize", reportWindowSize);

  return (
    <Router>
      <div className="Container Navbar" onClick={checkpop}>
        <div className="Navbar-cont ">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <AiFillBank />
            LAVISH
          </Link>
        </div>
        <div className="menuicon" onClick={(changeTimes) => setTimes(!times)}>
          {times ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={times ? "nav-show" : "navnav"}>
          <li className="links">
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Services
            </Link>
          </li>
          <li className="links">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About{" "}
            </Link>
          </li>
          <li className="links">
            <Link
              to="/faq"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              FAQ
            </Link>
          </li>
          <Link>
            <Button stylecolor="#00a000" name="Sign up" />
          </Link>
        </ul>
      </div>
    </Router>
  );
};

export default Navbar;
