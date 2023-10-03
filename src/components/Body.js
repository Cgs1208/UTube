import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="flex pt-16">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Body;
