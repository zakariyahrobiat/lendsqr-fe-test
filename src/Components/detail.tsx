import React from "react";
import { useAppContext } from "../context";
import avatar from "../assets/images/avatar.png";
import { Link } from "react-router-dom";
import "./detail.scss";
const Detail = () => {
  const { detail } = useAppContext();
  console.log(detail);

  const {
    orgName,
    userName,

    accountNumber,
    accountBalance,
  } = detail.detail;
  console.log(orgName);

  return (
    <div className="detail-container">
      <Link to="/users">
          <p>Back to Users</p>
      </Link>
      <div className="header">
        <p>User Details</p>
        <div className="buttons">
          <button>Blacklist User</button>
          <button>Activate User</button>
        </div>
      </div>
      <div className="detail">
        <img src={avatar} alt="" srcSet="" />
        <div>
          <p>{userName}</p>
          <p>{accountNumber}</p>
        </div>
        <div>
          <p>User’s Tier</p>
        </div>
        <div className="account">
          <p>{accountBalance}</p>
        </div>
      </div>
      <p>{orgName}</p>
    </div>
  );
};

export default Detail;
