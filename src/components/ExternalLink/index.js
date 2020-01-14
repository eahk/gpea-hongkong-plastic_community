import React from "react";
//
export default props => {
  return (
    <a
      className="link"
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      alt={props.alt}
    >
      {props.children}
    </a>
  );
};
