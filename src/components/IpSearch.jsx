import React, { useRef, useContext } from "react";
import { SearchContext } from "../context/SearchStateContext";
import "./styles/IpSearch.css";

export default function IpSearch({ onChangeIp }) {
  const inputRef = useRef(null);
  const { setIsInputFocus } = useContext(SearchContext);
  const validateInput = (value) => {
    if (new RegExp(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/).test(value)) {
      onChangeIp(value);
    }
  };

  return (
    <div className="ip-search">
      <input
        ref={inputRef}
        className="ip-search__field"
        type="text"
        placeholder="Search for any IP address or domain"
        onFocus={() => {
          setIsInputFocus(true);
        }}
        onBlur={() => {
          setIsInputFocus(false);
        }}
      ></input>
      <span>
        <button
          onFocus={() => {
            validateInput(inputRef.current.value);
          }}
          className="button-submit"
        ></button>
      </span>
    </div>
  );
}
