import React, { useContext } from "react";
import { SearchContext } from "../context/SearchStateContext";
import Tab from "./Tab";
import "./styles/HorizontalCard.css";
import ElementBordered from "./ElementBordered";

export default function HorizontalCard({ locationData }) {
  const { isFocusSinceMobile, isInputFocus } = useContext(SearchContext);
  console.log(locationData.isp);
  return (
    <div
      className={
        isInputFocus && isFocusSinceMobile
          ? "horizontal-card--hidden"
          : "horizontal-card"
      }
    >
      {Object.keys(locationData).length > 0 && (
        <>
          <Tab>
            <h6 className="tab__title">IP ADDRESS</h6>
            <p className="tab__content">{locationData.ip}</p>
          </Tab>
          <Tab>
            <ElementBordered>
              <h6 className="tab__title">LOCATION</h6>
              <div className="tab__content">
                {locationData.location.city +
                  ", " +
                  locationData.location.region}
                <div>{locationData.location.postalCode}</div>
              </div>
            </ElementBordered>
          </Tab>
          <Tab>
            <ElementBordered>
              <h6 className="tab__title">TIMEZONE</h6>
              <p className="tab__content">
                {"UTC" + locationData.location.timezone}
              </p>
            </ElementBordered>
          </Tab>
          <Tab>
            <ElementBordered>
              <h6 className="tab__title">ISP</h6>
              <p className="tab__content">{locationData.isp}</p>
            </ElementBordered>
          </Tab>
        </>
      )}
    </div>
  );
}
