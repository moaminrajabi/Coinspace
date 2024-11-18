import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function Overview() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 gap-2">
        <SideBar />
        <main className="col-span-4 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Overview;
