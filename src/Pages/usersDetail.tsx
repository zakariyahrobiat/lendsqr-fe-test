import React from "react";
import NavBar from "../Components/navBar";
import SideBar from "../Components/sideBar";
import Detail from "../Components/detail";

const UsersDetail = () => {
  return (
    <div>
      <NavBar />
      <div className="dashboard-container">
        <SideBar />
        <Detail />
        {/* <div>
          <Header />
          <UsersBody />
          <DashboardFooter />
        </div> */}
      </div>
    </div>
  );
};

export default UsersDetail;
