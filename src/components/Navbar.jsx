import React, { useState } from "react";

const Navbar = ({setWork , onWork}) => {
  
  return (
    <>
      <div className="bg-white flex items-center justify-around p-5 shadow-xs mb-1">
        <h1 className="text-blue-500 font-bold text-[22px]">StayAlert</h1>
        <ul className="list-none flex items-center gap-4">
          <li
            onClick={() => {
               setWork(false);
            }}
            className={`text-[22px] font-semibold cursor-pointer ${
              onWork ? "" : "text-blue-500"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => {
               setWork(true);  
            }}
            className={`text-[22px] font-semibold cursor-pointer ${
              onWork ? "text-blue-500" : ""
            }`}
          >
            Verify-SMS
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
