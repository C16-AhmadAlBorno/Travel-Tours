import React from "react";

function Map() {
  return (
    <div className="ratio ratio-16x9">
      <iframe
        src="https://www.google.com/maps/place/Jordan/@31.2224203,36.617992,11.25z/data=!4m6!3m5!1s0x15006f476664de99:0x8d285b0751264e99!8m2!3d30.585164!4d36.238414!16zL20vMDNfX3k?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
        className="w-100"
        height="400"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
