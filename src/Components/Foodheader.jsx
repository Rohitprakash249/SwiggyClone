import React from "react";
import { useEffect } from "react";

export default function Foodheader(props) {
  return (
    <>
      <div className=" rounded-b-[30px] z-0 text-white bg-orange-400">
        <div className="px-4  mx-3 py-5">
          <p className="text-md font-bold">FOODIE</p>
          <p className="text-xl font-bold">Weekend</p>
          <p>Flat $175 OFF on delights</p>
          <button className="uppercase bg-white my-2 py-[2px] text-orange-500 text-sm rounded-full px-3 px-2 font-serif">
            Order Now{" "}
          </button>
        </div>
      </div>
    </>
  );
}
