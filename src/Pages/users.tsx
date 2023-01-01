import React from "react";
import NavBar from "../Components/navBar";
import SideBar from "../Components/sideBar";
import Header from "../Components/dashboardHeader";
import DashboardFooter from "../Components/dashboardFooter";
import UsersBody from "../Components/usersBody";

const Users = () => {
  return (
    <div>
      <NavBar />
      <div className="dashboard-container">
        <SideBar />
        <div>
          <Header />
          <UsersBody />
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default Users;
