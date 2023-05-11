import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VansDetails() {
  const [vans, setVans] = useState(null);
  const params = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/vans/${params.id}`);
      const result = await response.json();
      setVans(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);
  return (
    <section className="my-4">
      {vans ? (
        <div className="max-w-[40rem] px-4  mx-auto">
          <img
            className=" max-w-[100%] sm:max-w-[60%] mx-auto"
            src={vans.vans.imageUrl}
            alt="img"
          />
          <h1 className="font-bold text-2xl my-3"> {vans.vans.name} </h1>
          <p className="text-[gray]">${vans.vans.price}.00/day </p>
          <h3 className="font-semibold">{vans.vans.type}</h3>
          <p>{vans.vans.description}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
}

export default VansDetails;
