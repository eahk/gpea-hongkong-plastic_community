import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <Logo>
          <img
            src="https://www.google.com.tw/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
            alt="logo"
          />
        </Logo>
        <DonateButton className="button">Button</DonateButton>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #fff;
  > .container {
    display: flex;
    align-items: center;
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
