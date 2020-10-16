import React from "react";
import "./styles/IpSearch.css";

export default function IpSearch() {
  return (
    <div className="ip-search">
      <input className="ip-search__field" type="text"></input>
      <span>
        <button className="button-submit"></button>
      </span>
    </div>
  );
}
