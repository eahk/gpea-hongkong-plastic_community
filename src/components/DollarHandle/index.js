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
  padding: 40px 20px;
  display: grid;
  grid-gap: 16px;
  background-color: var(--light-gray);
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const Handle = styled.div`
  cursor: pointer;
  height: 320px;
  flex: 1;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: var(--shadow--xl);
  border-bottom: 3px solid var(--orange);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > span {
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .amount {
      font-weight: bold;
      margin: 8px auto;
      font-size: 20px;
    }
    .description {
      font-size: 14px;
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
          <span className="description">支持社區走塑計畫</span>
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
          <span className="description">義工團隊工作</span>
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
          <span className="description">走塑社區遍地開花</span>
        </span>
      </Handle>
    </Handles>
  );
};
