import React from "react";

const API_KEY = "b9c54ee33bd94273843491330ceb90db";

function Maps({ lon, lat, zoom = 15 }) {
  return (
    <>
      <img
        src={`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${lat},${lon}&zoom=${zoom}.8135&apiKey=${API_KEY}`}
        alt="mapa"
      />
    </>
  );
}

export default Maps;
