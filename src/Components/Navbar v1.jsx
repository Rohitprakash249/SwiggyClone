import React from "react";
import arrow from "./arrow.png";

export default function Navbar() {
  return (
    <>
      <header>
        <div name="Navbar" className="flex justify-between bg-purple-300">
          <div className="mx-3 my-3">
            <div className="flex items-center">
              <img className="h-[20px]" src={arrow}></img>
              <p className="text-xl mx-2 ">location name </p>
            </div>

            <p className="mx-3">address </p>
          </div>

          <div className="mx-3 my-3">
            {/* <div className=' h-[40px] w-[40px] rounded-full'> */}
            <img className="rounded h-[40px] w-[40px]" src="/logo.png"></img>
            {/* </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
