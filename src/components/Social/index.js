import React, { useState, useEffect } from "react";
import styled from "styled-components";
//
import ExternalLink from "../ExternalLink";
//
const IconWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  > a {
    margin: 0 8px;
  }
`;
const Icon = styled.img`
  width: 30px;
  border-radius: 4px;
`;
//
export default props => {
  return (
    <>
      <IconWrapper>
        <ExternalLink href="https://www.facebook.com/greenpeacehk">
          <Icon src={require("../../assets/images/icons/i-fb.png")} />
        </ExternalLink>
        <ExternalLink href="https://www.instagram.com/greenpeace_hk">
          <Icon src={require("../../assets/images/icons/i-ig.png")} />
        </ExternalLink>
        <ExternalLink href="https://www.youtube.com/user/GreenpeaceChina">
          <Icon src={require("../../assets/images/icons/i-yt.png")} />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/greenpeace_hk">
          <Icon src={require("../../assets/images/icons/i-twitter.svg")} />
        </ExternalLink>
        <ExternalLink href="https://medium.com/greenpeace-east-asia">
          <Icon src={require("../../assets/images/icons/i-medium.png")} />
        </ExternalLink>
      </IconWrapper>
    </>
  );
};
