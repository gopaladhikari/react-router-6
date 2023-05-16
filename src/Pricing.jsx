import React from "react";
import { useOutletContext } from "react-router-dom";

function Pricing() {
  const vans = useOutletContext();
  return (
    <div>
      <h3>Price : ${vans.price}/day </h3>
    </div>
  );
}

export default Pricing;
