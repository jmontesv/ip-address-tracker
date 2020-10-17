import React from "react";
import Tab from "./Tab";
import "./styles/HorizontalCard.css";

export default function HorizontalCard({ locationData }) {
  return (
    <div className="horizontal-card">
      {Object.keys(locationData).length > 0 && (
        <>
          <Tab
            withBorder={false}
            title="IP ADDRESS"
            content={locationData.ip}
          />
          <Tab
            withBorder={true}
            title="LOCATION"
            content={`${locationData.location.city},${locationData.location.region}${locationData.location.postalCode}`}
          />
          <Tab
            title="TIMEZONE"
            content={"UTC" + locationData.location.timezone}
            withBorder={true}
          />
          <Tab withBorder={true} title="ISP" content={locationData.isp} />
        </>
      )}
    </div>
  );
}
