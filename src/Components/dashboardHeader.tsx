import React from "react";
import icon from "../assets/images/icon.png";
import icon1 from "../assets/images/icon-2.png";
import icon2 from "../assets/images/icon-3.png";
import icon3 from "../assets/images/icon-4.png";
import { useAppContext } from "../context";
import "./dashboardHeader.scss";
const Header = () => {
  const { data } = useAppContext();
  return (
    <div className="header-container">
      <h2>Users</h2>
      <div className="grid-container">
        <div className="box">
          <img src={icon} alt="" srcSet="" />
          <p className="name">Users</p>
          <p className="number">{data.length}</p>
        </div>
        <div className="box">
          <img src={icon1} alt="" srcSet="" />
          <p className="name">Active Users</p>
          <p className="number">{data.length}</p>
        </div>
        <div className="box">
          <img src={icon2} alt="" srcSet="" />
          <p className="name">Users with Loans</p>
          <p className="number">{data.length}</p>
        </div>
        <div className="box">
          <img src={icon3} alt="" srcSet="" />
          <p className="name">Users with Savings</p>
          <p className="number">{data.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
