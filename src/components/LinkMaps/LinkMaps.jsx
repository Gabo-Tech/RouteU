import React from "react";

function LinkMaps({ lon, lat }) {
  return (
    <>
      <a href={`https://maps.google.com/?q=${lat},${lon}`} target="_blank">
        <button className="btn-card"> Link al mapa </button>
      </a>
    </>
  );
}

export default LinkMaps;
