import React from "react";
import { useOutletContext } from "react-router-dom";

function Photos() {
  const vans = useOutletContext();
  return (
    <div>
      <img className="w-[150px] h-[150px]" src={vans.imageUrl} alt="" />
    </div>
  );
}

export default Photos;
