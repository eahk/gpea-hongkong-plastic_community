import React from "react";
import styled from "styled-components";
//
const StyledLink = styled.a`
  text-decoration: none;
  color: #06c;
  &:hover {
    text-decoration: underline;
  }
`;
//
export default props => {
  return (
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      alt={props.alt}
    >
      {props.children}
    </StyledLink>
  );
};
