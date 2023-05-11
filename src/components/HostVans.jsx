import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [vans, setVans] = useState();

  const fetchVans = async () => {
    try {
      const response = await fetch("/api/host/vans");
      const result = await response.json();
      setVans(result.vans);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVans();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold my-3">Your Listed Vans</h1>
      {vans
        ? vans.map((item) => {
            const { id, name, description, imageUrl } = item;
            return (
              <Link to={`/host/vans/${id}`} key={id}>
                <div className="my-8">
                  <img src={imageUrl} alt="" />
                  <h2 className="text-xl font-medium my-4"> {name} </h2>
                  <p> {description} </p>
                </div>
              </Link>
            );
          })
        : "Loading..."}
    </>
  );
}

export default HostVans;
