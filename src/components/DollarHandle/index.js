import React from "react";
import styled from "styled-components";
//
import "./index.scss";
//
import handle1 from "../../assets/images/GP0STTIZL_Medium_res.jpg";
import handle2 from "../../assets/images/GP0STREPE_Medium_res.jpg";
import handle3 from "../../assets/images/GP0STRETY_Medium_res.jpg";
//
const Handles = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: row nowrap;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  white-space: nowrap;
`;
const WhiteSpace = styled.div`
  padding: 20px;
  height: 100%;
  background: transparent;
`;
const Handle = styled.div`
  cursor: pointer;
  margin: 20px;
  min-width: 280px;
  height: 280px;
  flex: 1;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: var(--shadow--xl);
  border-bottom: 4px solid var(--orange);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > span {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .amount {
      color: var(--orange);
      font-weight: 900;
      font-size: 1.8rem;
    }
    .description {
      font-size: 0.8rem;
    }
  }
`;
const HandleImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.38s ease-out;
    will-change: transform;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
//
export default props => {
  const handleChooseMonthlyDonate = amount => {
    window.ee.emit("SHOULD_CHOOSE_MONTHLY_AMOUNT", amount);
  };

  return (
    <Handles>
      <Handle
        onClick={() => {
          handleChooseMonthlyDonate(200);
        }}
      >
        <HandleImageContainer>
          <img src={handle1} alt="HKD 200" />
        </HandleImageContainer>
        <span>
          <span className="amount">HKD 200</span>
          <span className="description">遊說100間店鋪加入</span>
        </span>
      </Handle>
      <Handle
        onClick={() => {
          handleChooseMonthlyDonate(300);
        }}
      >
        <HandleImageContainer>
          <img src={handle2} alt="HKD 300" />
        </HandleImageContainer>
        <span>
          <span className="amount">HKD 300</span>
          <span className="description">遊說200間店鋪，香港多一個走塑社區</span>
        </span>
      </Handle>
      <Handle
        onClick={() => {
          handleChooseMonthlyDonate(500);
        }}
      >
        <HandleImageContainer>
          <img src={handle3} alt="HKD 500" />
        </HandleImageContainer>
        <span>
          <span className="amount">HKD 500</span>
          <span className="description">遊說400間店鋪和更多團體加入走塑</span>
        </span>
      </Handle>
      <WhiteSpace />
    </Handles>
  );
};
