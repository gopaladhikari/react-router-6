import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Vans from "./components/Vans";
import VansDetails from "./components/VansDetails";
import Dashboard from "./components/Dashboard";
import Reviews from "./components/Reviews";
import Income from "./components/Income";
import HostLayout from "./components/HostLayout";
import HostVans from "./components/HostVans";
import HostVansDetails from "./components/HostVansDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./server";
import HostVansDetailDashboard from "./components/HostVansDetailDashboard";
import Pricing from "./Pricing";
import Photos from "./Photos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />}>
              <Route index element={<HostVansDetailDashboard />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
