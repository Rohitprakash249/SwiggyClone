import React from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DiningIcon from "@mui/icons-material/Dining";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CycloneIcon from "@mui/icons-material/Cyclone";
import HomeIcon from "@mui/icons-material/Home";

export default function Footer({ page, setPage }) {
  return (
    <>
      <footer className=" sticky ">
        <div className="flex  h-[50px] footer w-full justify-between px-4 items-center text-center text-sm text-[#848589]  bg-white py-7">
          <div
            onClick={() => setPage("home")}
            className={`${page === "home" && `text-orange-500`}`}
          >
            <HomeIcon />
            <p className="text-xs">Home</p>
          </div>
          <div
            className={`${page === "food" && `text-orange-500`}`}
            onClick={() => setPage("food")}
          >
            <FastfoodIcon sx={{ color: "#fffff" }} />
            <p className="text-xs">Food</p>
          </div>
          <div
            className={`${page === "ezmart" && `text-orange-500`}`}
            onClick={() => setPage("ezmart")}
          >
            <ShoppingBagIcon />
            <p className="text-xs">ezmart</p>
          </div>
          <div
            className={`${page === "dineout" && `text-orange-500`}`}
            onClick={() => setPage("dineout")}
          >
            <DiningIcon />
            <p className="text-xs">Dineout</p>
          </div>
          <div
            className={`${page === "card" && `text-orange-500`}`}
            onClick={() => setPage("card")}
          >
            <CreditCardIcon />
            <p className="text-xs">Card</p>
          </div>
          <div
            className={`${page === "reorder" && `text-orange-500`}`}
            onClick={() => setPage("reorder")}
          >
            <CycloneIcon />
            <p className="text-xs">Reorder</p>
          </div>
        </div>
      </footer>
    </>
  );
}
