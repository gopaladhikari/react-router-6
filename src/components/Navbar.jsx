import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    textUnderlineOffset: "5px",
    color: "red",
  };
  const handleStyle = ({ isActive }) => (isActive ? activeStyle : null);

  return (
    <header className="text-gray-600 body-font px-3 pt-6 max-w-[28rem] mx-auto">
      <section className="flex items-center justify-between">
        <NavLink to="/" className="font-bold text-3xl">
          #VansLife
        </NavLink>
        <ul className="flex items-center gap-4 justify-center text-[17px]">
          <li>
            <NavLink style={handleStyle} to="/">
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink style={handleStyle} to="/about">
              {" "}
              About{" "}
            </NavLink>
          </li>
          <li>
            <NavLink style={handleStyle} to="/vans">
              {" "}
              Vans{" "}
            </NavLink>
          </li>
          <li>
            <NavLink style={handleStyle} to="/host">
              {" "}
              Host{" "}
            </NavLink>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Navbar;
