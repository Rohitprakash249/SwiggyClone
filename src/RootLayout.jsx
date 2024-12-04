import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Promotion from "./Components/Promotion";
import Tiles from "./Components/Tiles";
import CardPromotion from "./Components/CardPromotion";
import Liveitup from "./Components/Liveitup";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import { useState } from "react";
import FoodPage from "./Components/FoodPage";

export default function RootLayout() {
  const [page, setPage] = useState("home");

  return (
    <>
      <div>
        <Navbar page={page} />
        <Outlet />
        {page === "home" ? <Homepage /> : ""}
        {page === "food" ? <FoodPage /> : ""}
        <Footer page={page} setPage={setPage} />
      </div>
    </>
  );
}
