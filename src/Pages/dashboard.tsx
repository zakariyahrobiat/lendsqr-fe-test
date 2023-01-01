import React from "react";
import NavBar from "../Components/navBar";
import SideBar from "../Components/sideBar";
import Header from "../Components/dashboardHeader";
import Body from "../Components/dashboardBody";
import DashboardFooter from "../Components/dashboardFooter";
import "./dashboard.scss";
const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="dashboard-container">
        <SideBar />
        <div>
          <Header />
          <Body />
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
