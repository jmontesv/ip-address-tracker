import React, { useState, useEffect } from "react";
import "./App.css";
import apiKey from "./config";
import Header from "./components/Header";
import HorizontalCard from "./components/HorizontalCard";
import MapLocation from "./components/MapLocation";

function App() {
  const [ip, setIp] = useState("");
  const [locationData, setLocationData] = useState({});
  useEffect(() => {
    setLocationData({
      ip: "8.8.8.8",
      location: {
        country: "US",
        region: "California",
        city: "Mountain View",
        lat: 37.40599,
        lng: -122.078514,
        postalCode: "94043",
        timezone: "-07:00",
        geonameId: 5375481,
      },
      domains: [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn",
      ],
      as: {
        asn: 15169,
        name: "Google LLC",
        route: "8.8.8.0/24",
        domain: "https://about.google/intl/en/",
        type: "Content",
      },
      isp: "Google LLC",
      proxy: {
        proxy: false,
        vpn: false,
        tor: false,
      },
    });
    //getLocationRequest(ip)
    //  .then((res) => res.json())
    //  .then(({ ip, location, domains }) => {
    //setLocationData({ ip, location, domains });
    //});
  }, [ip]);

  const handleIp = (currentIp) => {
    setIp(currentIp);
  };
  const getLocationRequest = (ip) => {
    return ip === ""
      ? fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`)
      : fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`);
  };
  return (
    <>
      <Header handleIp={handleIp} />
      <div className="main">
        <HorizontalCard locationData={locationData} />
        <MapLocation
          latitude={locationData?.location?.lat}
          longitude={locationData?.location?.lng}
        />
      </div>
    </>
  );
}

export default App;
