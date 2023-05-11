import React from "react";
import AboutHero from "../assets/image1.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="px-2 bg-[#FFF7ED] h-screen">
      <div>
        <img className="mx-auto object-contain " src={AboutHero} alt="" />
      </div>
      <div>
        <h1 className="text-xl font-semibold my-4">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="font-normal">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
      </div>
      <div className="bg-[#FFCC8D] p-8 mt-8 mx-auto">
        <h2 className="text-[#161616] font-bold">
          Your destination is waiting. <br /> Your van is ready.
        </h2>
        <div className="bg-[#161616] w-[174px] h-[50px] mt-4 rounded-[10px] text-white flex items-center justify-center">
          <Link to="/vans">Explore our vans</Link>
        </div>
      </div>
    </section>
  );
}

export default About;
