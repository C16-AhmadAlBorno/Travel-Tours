import React from "react";

function Map() {
  return (
    <div
      style={{ position: "relative", width: "100%", paddingBottom: "30%" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3454.12345!2d36.238414!3d30.585164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjo!4v1690000000000!5m2!1sen!2sjo&layer=c"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
