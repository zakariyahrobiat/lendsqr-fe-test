import React, { useEffect, useState } from "react";
import { useAppContext } from "../context";
import "./dashboardBody.scss";

import icon4 from "../assets/images/ic-more.png";
import filter from "../assets/images/filter.png";

const Body: React.FC = () => {
  const { data, start, end } = useAppContext();

  return (
    <div className="body-container">
      <div className="data-container">
        <div className="title">
          <div className="organisation">
            <p>organization</p> <img src={filter} alt="" srcSet="" />
          </div>
          <div className="username">
            <p>Username</p> <img src={filter} alt="" srcSet="" />
          </div>
          <div className="email">
            <p>Email</p> <img src={filter} alt="" srcSet="" />
          </div>
          <div className="phonenumber">
            <p>Phone number</p> <img src={filter} alt="" srcSet="" />
          </div>
          <div className="joined">
            <p>Date joined</p> <img src={filter} alt="" srcSet="" />
          </div>
          <div className="status">
            <p>Status</p> <img src={filter} alt="" srcSet="" />
          </div>
        </div>
        {data.slice(start, end).map((item: any) => {
          const { orgName, userName, email, phoneNumber, createdAt } = item;
          return (
            <div className="data">
              <p className="organisation">{orgName}</p>
              <p className="username">{userName}</p>
              <p className="email">{email}</p>
              <p className="phonenumber">{phoneNumber}</p>
              <p className="joined">{createdAt}</p>
              <p className="status">active</p>
              <img src={icon4} alt="" srcSet="" className="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
