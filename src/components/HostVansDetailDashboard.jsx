import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVansDetailDashboard() {
  const vans = useOutletContext();
  return (
    <div className="flex gap-3 flex-col">
      <h4>Name : {vans.name} </h4>
      <h4>Type: {vans.type} </h4>
      <h4>Description: {vans.description} </h4>
    </div>
  );
}

export default HostVansDetailDashboard;
