import React from "react";
import { useContext } from "react";
import { travelContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
const slideCountryImg = [
  {
    url: `https://media.istockphoto.com/id/514325748/photo/bosphorus-bridge-during-the-sunset-istanbul.jpg?s=1024x1024&w=is&k=20&c=ezqVq4qiRTPi3kTZNRveddp2ed4BXfcYjJnUzgXBgDk=`,
    caption: "Turkey",
  },
  {
    url: `https://goexholidays.com/uploads/0000/1/2023/12/25/downtown-cairo.jpg`,
    caption: "Cairo",
  },
  {
    url: `https://q8-press.com/wp-content/uploads/2025/06/baku-city-780x470.jpg`,
    caption: "Aderbejan",
  },
  {
    url: `https://www.360lending.ca/_next/image?url=https%3A%2F%2Fthankful-cactus-aeb072f3df.media.strapiapp.com%2Fmost_expensive_2024_6b1abeecb1.jpg&w=1920&q=75`,
    caption: "Canada",
  },
];

function Slider() {
  return (
    <div className="fadeCountry">
      <Fade>
        {slideCountryImg.map((country, i) => {
          return (
            <div key={i}>
              <img
                src={country.url}
                alt={country.caption}
                title={country.caption}
                style={{ width: "1800px", height: "500px", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </Fade>
    </div>
  );
}

export default Slider;
