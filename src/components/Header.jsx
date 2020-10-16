import React from "react";
import HorizontalCard from "./HorizontalCard";
import IpSearch from "./IpSearch";
import "./styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <IpSearch />
      <HorizontalCard />
    </div>
  );
}
