import React from "react";
import arrow from "./arrow.png";
import Drawer from "../UiComponents/Drawer";
import downArrow from "./downArrow.png";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useSelector } from "react-redux";
export default function Navbar({ page }) {
  return (
    <>
      {/* <header className=' pb-2 bg-white '> */}
      <header className={`pb-2  ${page === "food" && `bg-orange-400`}`}>
        <div
          name="Navbar"
          className={`flex justify-between  ${
            page === "food" && `bg-orange-400`
          }`}
        >
          <div className="mx-3 my-3">
            <div className="flex items-center">
              <img className="h-[20px]" src={arrow}></img>
              <p className="text-xl ml-2 ">location name </p>
              <img className="h-[20px] pt-1 mx-1" src={downArrow}></img>
            </div>

            <p className="mx-3">address </p>
          </div>

          <div>
            <Drawer />
          </div>
        </div>
        <div name="searchdiv">
          <div className="flex justify-between border-2 rounded-xl mx-3 my-3 bg-white">
            <div className=" my-3 mx-2 bg-white">
              <input
                className="outline-none mx-2 "
                placeholder="Search for 'biryani' "
              ></input>
            </div>

            <div className="flex items-center mx-3">
              <div className=" border-r-2  px-1 text-gray-400 ">
                {" "}
                <SearchIcon />
              </div>
              <div className=" px-1 text-orange-500">
                {" "}
                <MicIcon />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
