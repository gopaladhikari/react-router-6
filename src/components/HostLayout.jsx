import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    textUnderlineOffset: "5px",
    color: "red",
  };

  const handleStyle = ({ isActive }) => (isActive ? activeStyle : null);

  return (
    <>
      <nav>
        <ul className="flex gap-6 py-3 px-3">
          <li>
            <NavLink style={handleStyle} to="/host" end>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink style={handleStyle} to="income">
              Income
            </NavLink>
          </li>
          <li>
            <NavLink style={handleStyle} to="reviews">
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink style={handleStyle} to="vans">
              Vans{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
