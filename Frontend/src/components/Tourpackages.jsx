import React from "react";
import { useContext, useEffect } from "react";
import { travelContext } from "../App";
import axios from "axios";

function Tourpackages() {
  const { tourPackage, setTourPackage } = useContext(travelContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/tours/Packages")
      .then((res) => {
              console.log("Data from backend:", res.data);

        setTourPackage(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {Array.isArray(tourPackage) &&
        tourPackage.map((tour, index) => {
          return (
            <div key={index}>
              <img src={tour.images[0]} alt="hotel" />
              <p>{tour.hotel}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Tourpackages;
