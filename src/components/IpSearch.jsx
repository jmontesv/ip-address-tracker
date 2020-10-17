import React, { useRef } from "react";
import "./styles/IpSearch.css";

export default function IpSearch({ onChangeIp }) {
  const inputRef = useRef(null);
  return (
    <div className="ip-search">
      <input
        ref={inputRef}
        className="ip-search__field"
        type="text"
        placeholder="Search for any IP address or domain"
      ></input>
      <span>
        <button
          onClick={() => {
            onChangeIp(inputRef.current.value);
          }}
          className="button-submit"
        ></button>
      </span>
    </div>
  );
}
