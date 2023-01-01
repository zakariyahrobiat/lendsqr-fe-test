import React, { FC } from "react";
import { useAppContext } from "../context";
import logo from "../assets/images/logo.svg";
import bar from "../assets/images/bar.png";
import search from "../assets/images/search.png";
import bell from "../assets/images/bell.png";
import person from "../assets/images/person.png";
import arrow from "../assets/images/arrow.png";

import "./navBar.scss";
const NavBar: React.FC = () => {
  const { showNav } = useAppContext();
  return (
    <div className="nav-container">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="" srcSet="" />
        </div>
        <div className="hamburger" onClick={showNav}>
          <img src={bar} alt="" srcSet="" />
        </div>
      </div>
      {/* <div className="nav"> */}
      <div className="nav-list">
        <input type="text" name="" id="" placeholder="Search for anything" />
        <button>
          <img src={search} alt="" srcSet="" />
        </button>
      </div>
      <div className="nav-item">
        <a href="">
          <p>Docs</p>
        </a>
        <img src={bell} alt="" srcSet="" />
        <div className="person">
          <img src={person} alt="" srcSet="" className="person-img" />
          <p>Adedeji</p>
          <img src={arrow} alt="" srcSet="" />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default NavBar;
