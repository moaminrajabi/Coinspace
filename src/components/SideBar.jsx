import React from "react";
import Logo from "../ui/Logo";
import QuikAcsess from "../ui/QuikAcsess";

function SideBar() {
  return (
    <div className="h-screen bg-customBlue text-slate-50">
      <Logo />
      <hr className="border-stone-700  ml-5 mr-8" />
      <QuikAcsess />
    </div>
  );
}

export default SideBar;
