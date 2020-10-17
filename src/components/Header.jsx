import React, { useEffect, useState } from "react";
import IpSearch from "./IpSearch";
import "./styles/Header.css";

export default function Header({ handleIp }) {
  return (
    <div className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <IpSearch onChangeIp={handleIp} />
    </div>
  );
}
