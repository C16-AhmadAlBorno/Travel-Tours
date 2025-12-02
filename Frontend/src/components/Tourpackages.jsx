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
        //console.log("Data from backend:", res.data.result);

        setTourPackage(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {tourPackage.map((tour, index) => {
        console.log(tour);

        return (
          <div key={index}>
            <img src={tour.hotel.images} width="100px" height="100px" alt="hotel" />
            <p>{tour.hotel.name}
              {tour.packageName}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Tourpackages;
