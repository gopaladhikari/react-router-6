import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/vans");
      const result = await response.json();
      setVans(result.vans);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="flex flex-wrap justify-between">
        {vans ? (
          vans.map((item) => {
            const { id, name, price, description, imageUrl, type } = item;
            return (
              <div key={id} className="w-[47%]">
                <Link to={`/vans/${id}`}>
                  <img
                    className="max-h-[20rem] w-full object-cover mx-auto"
                    src={imageUrl}
                    alt=""
                  />
                  <article className="text-center sm:text-left">
                    <h3 className="text-lg font-bold my-2"> {name} </h3>
                    <p className="text-gray-500 my-2"> ${price}/day </p>
                    <button className="bg-green-600 rounded-xl my-2 px-14 h-[35px]">
                      {" "}
                      {type}{" "}
                    </button>
                  </article>
                  <p>
                    {" "}
                    {description.length > 150
                      ? description.slice(0, 150) + "..."
                      : description}{" "}
                  </p>
                </Link>
              </div>
            );
          })
        ) : (
          <h2>loading...</h2>
        )}
      </div>
    </section>
  );
}

export default Vans;
