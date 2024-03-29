import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { BigSidebar, SmallSidebar, Navbar } from "../../components";
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page"></div>
          <Outlet />
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
