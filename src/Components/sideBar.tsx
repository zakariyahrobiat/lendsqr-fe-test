import React from "react";
import "./sideBar.scss";
import briefcase from "../assets/images/briefcase.png";
import dashboard from "../assets/images/home.png";
import { Customer, Business, Setting } from "../assets/data";
import { Link } from "react-router-dom";
import { useAppContext } from "../context";
const SideBar = () => {
  const { refContainer } = useAppContext();

  return (
    <div className="side-container" ref={refContainer}>
      <div className="title-container">
        <div className="title">
          <img src={briefcase} alt="" srcSet="" /> <p> Switch Organization</p>
        </div>
        <Link to="/dashboard" style={{ textDecoration: `none` }}>
          <div className="title">
            <img src={dashboard} alt="" srcSet="" />
            <p> Dashboard </p>
          </div>
        </Link>
      </div>
      <div className="sideBar">
        <p className="heading">CUSTOMERS</p>
        {Customer.map((item, index) => {
          const { id, name, icon, link } = item;

          return (
            <Link
              to={{ pathname: link }}
              style={{ textDecoration: `none` }}
              key={index}
            >
              <div className="customer">
                <img src={icon} alt="" srcSet="" />
                <p>{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="sideBar">
        <p className="heading">BUSINESSES</p>
        {Business.map((item, index) => {
          const { id, name, icon } = item;
          return (
            <Link to="" style={{ textDecoration: `none` }} key={index}>
              <div className="customer">
                <img src={icon} alt="" srcSet="" />
                <p>{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="sideBar">
        <p className="heading">SETTINGS</p>
        {Setting.map((item, index) => {
          const { id, name, icon } = item;
          return (
            <Link to="" style={{ textDecoration: `none` }} key={index}>
              <div className="customer">
                <img src={icon} alt="" srcSet="" />
                <p>{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
