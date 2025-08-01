import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-11">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
