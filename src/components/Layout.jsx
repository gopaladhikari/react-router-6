import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="max-w-[28rem] mt-4 mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
