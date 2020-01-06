import React from "react";
import styled from "styled-components";
import Container from "./Container";

function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo>Logo</Logo>
        <DonateButton>Button</DonateButton>
      </StyledContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #fff;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  @media (max-width: 767px) {
    height: 48px;
  }
`;

const Logo = styled.div`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: 18px;
  line-height: 20px;
  color: #626262;
  text-decoration: none;
  > img {
    max-width: 156px;
    display: block;
    height: auto;
  }
`;

const DonateButton = styled.a`
  height: auto;
  line-height: 20px;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  background-color: #f36d3a;
  color: #fff;
  padding: 3px 12px;
  cursor: pointer;
`;

export default Header;
