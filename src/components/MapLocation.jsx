import React from "react";
import "./styles/Map.css";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

export const iconPosition = L.icon({
  iconUrl: require("../img/icon-location.svg"),
});
export default function MapLocation({ latitude, longitude }) {
  return (
    <>
      {latitude && longitude && (
        <Map className="map-wrapper" center={[latitude, longitude]} zoom={20}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker icon={iconPosition} position={[latitude, longitude]} />
        </Map>
      )}
    </>
  );
}
