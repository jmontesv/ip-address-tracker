import React, { useState, useEffect } from "react";
import "./App.css";
import apiKey from "./config";
import Header from "./components/Header";
import HorizontalCard from "./components/HorizontalCard";
import MapLocation from "./components/MapLocation";
import SearchStateProvider from "./context/SearchStateContext";

function App() {
  const [ip, setIp] = useState("");
  const [error, setError] = useState(false);
  const [locationData, setLocationData] = useState({});
  useEffect(() => {
    getLocationRequest(ip)
      .then((res) => res.json())
      .then(({ ip, location, domains }) => {
        setLocationData({ ip, location, domains });
      })
      .catch((err) => {
        setError(err);
      });
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
      <SearchStateProvider>
        <Header handleIp={handleIp} />
        <div className="main">
          {!error && (
            <>
              <HorizontalCard locationData={locationData} />
              <MapLocation
                latitude={locationData?.location?.lat}
                longitude={locationData?.location?.lng}
              />
            </>
          )}
        </div>
      </SearchStateProvider>
    </>
  );
}

export default App;
