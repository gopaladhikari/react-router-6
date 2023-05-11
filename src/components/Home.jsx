import React from "react";
import { Link } from "react-router-dom";
import HomeHeroPic from "../assets/home-hero.png";

function Home() {
  return (
    <section
      className="h-[60vh] bg-cover bg-no-repeat py-16"
      style={{ background: `url(${HomeHeroPic})` }}
    >
      <div className="text-white">
        <h1 className="text-2xl font-bold pl-5">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="my-8 pl-5">
          Add adventure to your life by joining #vans life movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <div className="w-full my-4 pl-5">
          <Link
            to="/vans"
            className="bg-orange-500 rounded-[8px] px-16 py-2 mx-auto"
          >
            Find Your Van
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
