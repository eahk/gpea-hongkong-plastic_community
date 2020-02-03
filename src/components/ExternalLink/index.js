import React from "react";
import styled from "styled-components";
//
const StyledLink = styled.a`
  margin: 0 2px;
  text-decoration: none;
`;
//
export default props => {
  return (
    <StyledLink
      className="link"
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      alt={props.alt}
    >
      {props.children}
    </StyledLink>
  );
};
