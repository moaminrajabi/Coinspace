import React from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Main from "../components/Main";

function Overview() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 gap-2">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default Overview;
