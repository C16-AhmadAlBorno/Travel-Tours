import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { travelContext } from "../App";

function PackageDetails() {
  const { id } = useParams(); 
  const { packagedetailes, setpackageDetailes } = useContext(travelContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tours/Packages/${id}`)
      .then((res) => {
        setpackageDetailes(res.data.package);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!packagedetailes) return <h2>Loading...</h2>;

  return (
 <div style={{ position: "relative", width: "90%", maxWidth: "900px", margin: "20px auto", borderRadius: "15px", overflow: "hidden", height: "500px" }}>
  <img
    src={packagedetailes.hotel?.images}
    alt={packagedetailes.hotel?.name}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />

  
  <div style={{
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "#fff",
    textShadow: "2px 2px 6px rgba(0,0,0,0.7)" 
  }}>
    <h2>{packagedetailes.packageName}</h2>
    <p>{packagedetailes.description}</p>
    <p><strong>Price:</strong> {packagedetailes.price} JD</p>
    <p><strong>Duration:</strong> {packagedetailes.duration}</p>
    {packagedetailes.airline && <p><strong>Airline:</strong> {packagedetailes.airline.airline}</p>}
    {packagedetailes.hotel && <p><strong>Hotel:</strong> {packagedetailes.hotel.name}</p>}
  </div>
</div>
  );
}

export default PackageDetails;