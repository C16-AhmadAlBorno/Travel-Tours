import React from "react";
import { useContext } from "react";
import { travelContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
const slideCountryImg = [
  {
    url: `https://www.holidaytravel.jo/sites/default/files/2019-01/shutterstock_143091637.jpg`,
    caption: "Turkey",
  },
  {
    url: `https://goexholidays.com/uploads/0000/1/2023/12/25/downtown-cairo.jpg`,
    caption: "Cairo",
  },
  {
    url: `https://www.traveliun.com/wp-content/uploads/2023/03/%D8%A7%D8%B0%D8%B1%D8%A8%D9%8A%D8%AC%D8%A7%D9%86-%D8%AE%D8%A7%D8%B1%D8%AC%D9%8A-%D9%88%D9%83%D8%A7%D9%84%D8%A9-%D8%AA%D8%B1%D8%A7%D9%81%D9%84%D9%8A%D9%88%D9%86-%D9%84%D9%84%D8%B3%D9%81%D8%B1-%D9%88%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D8%A92.jpg`,
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
            <div key={i} >
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
