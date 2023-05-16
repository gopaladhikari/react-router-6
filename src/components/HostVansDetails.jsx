import React, { useState, useEffect } from "react";
import { useParams, Outlet, NavLink } from "react-router-dom";

function HostVansDetails() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    textUnderlineOffset: "5px",
    color: "red",
  };
  const [vans, setVans] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    const response = await fetch(`/api/host/vans/${id}`);
    const result = await response.json();
    setVans(result.vans);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return vans ? (
    <section>
      <div className="flex gap-4 items-center">
        <img className="h-[160px] w-[160px]" src={vans.imageUrl} alt="" />
        <div>
          <button className=" capitalize w-[70px] h-[27px] bg-[#E17654] rounded-[4.0716px]">
            {" "}
            {vans.type}{" "}
          </button>
          <h2 className="font-semibold text-3xl my-3"> {vans.name} </h2>
          <p>
            <span className="font-bold">${vans.price}</span>/day{" "}
          </p>
        </div>
      </div>
      <nav className="flex gap-4 my-4">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="."
          end
        >
          Details
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="photos"
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={vans} />
    </section>
  ) : (
    "loading..."
  );
}

export default HostVansDetails;
