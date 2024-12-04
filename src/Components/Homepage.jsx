import React from "react";
import Promotion from "./Promotion";
import CardPromotion from "./CardPromotion";
import Tiles from "./Tiles";
import Liveitup from "./Liveitup";

export default function Homepage(props) {
  return (
    <>
      <Promotion />
      <Tiles />
      <CardPromotion />
      <Liveitup />
    </>
  );
}
