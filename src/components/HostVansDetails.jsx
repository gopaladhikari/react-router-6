import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function HostVansDetails() {
  const [vans, setVans] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    const response = await fetch(`/api/host/vans/${id}`);
    const result = await response.json();
    setVans(result.vans);
  };
  console.log(vans);

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

      <div className="mt-6">
        <h2 className="my-3"> Name: {vans.name}</h2>
        <h2 className="my-3"> Category: {vans.type}</h2>
        <h2 className="my-3"> Description: {vans.description}</h2>
      </div>
    </section>
  ) : (
    "loading..."
  );
}

export default HostVansDetails;
