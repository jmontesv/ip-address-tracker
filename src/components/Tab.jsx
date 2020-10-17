import React from "react";
import "./styles/Tab.css";

export default function Tab({ title, content, withBorder }) {
  return (
    <div className={withBorder ? " tab tab--border" : "tab"}>
      <h6 className="tab__title">{title}</h6>
      <p className="tab__content">{content}</p>
    </div>
  );
}
