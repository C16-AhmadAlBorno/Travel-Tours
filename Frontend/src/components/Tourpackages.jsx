import React from "react";
import { useContext, useEffect } from "react";
import { travelContext } from "../App";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function Tourpackages() {
  const navigate = useNavigate();

  const {
    tourPackage,
    setTourPackage,
    cart,
    setCart,
    packagedetailes,
    setpackageDetailes,
  } = useContext(travelContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/tours/Packages")
      .then((res) => {
        //console.log("Data from backend:", res.data.result);

        setTourPackage(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  const addToCart = (item) => {
    axios
      .post("http://localhost:5000/Carts/new", item)
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="packageimage">
      {tourPackage.map((tour, index) => {
        return (
          <div key={index} className="">
            <Card style={{ width: "18rem" }}>
              <Card.Img src={tour.hotel.images} alt="hotel" />
              <Card.Body>
                <Card.Title>{tour.packageName}</Card.Title>
                <Card.Text>
                  {tour.description} <br />
                  {tour.price}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(tour)}>
                  Add To Cart
                </Button>

                <Link to={`/PackageDetails/${tour._id}`}>
                  <Button variant="primary">More Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Tourpackages;
