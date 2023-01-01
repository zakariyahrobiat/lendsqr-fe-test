import React, { useState } from "react";
import prev from "../assets/images/prev.png";
import next from "../assets/images/next.png";
import { useAppContext } from "../context";
import "./dashboardFooter.scss";
const DashboardFooter = () => {
  const { data, end, count, increase, decrease } = useAppContext();

  return (
    <div>
      {" "}
      <div className="footer">
        <div className="footer-list">
          <p>Showing </p>
          <p className="page">{end}</p>
          <p>out of {data.length}</p>
        </div>
        <div className="footer-item">
          <img src={prev} alt="" srcSet="" onClick={decrease} />
          <p>{count}</p>
          <img src={next} alt="" srcSet="" onClick={increase} />
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
