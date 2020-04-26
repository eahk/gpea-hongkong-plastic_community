import React from "react";
import styled from "styled-components";
//
import handle1 from "../../assets/images/7R306760.jpg";
import handle2 from "../../assets/images/7R306786.jpg";
import handle3 from "../../assets/images/7R306795.jpg";
//
const Handles = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
`;
const WhiteSpace = styled.div`
  padding: 1rem;
  background: transparent;
`;
const Handle = styled.div`
  cursor: pointer;
  margin-right: 1rem;
  min-width: 260px;
  height: 300px;
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
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .amount {
      color: var(--orange);
      font-weight: bold;
      font-size: 1.8rem;
      margin-bottom: 4px;
    }
    .description {
      color: var(--sub-text);
      font-size: 12px;
      text-decoration: underline;
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
    object-position: center;
    transition: transform 0.38s ease-out;
    will-change: transform;
  }
  &:hover {
    img {
      transform: scale(1.2);
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
          <span className="description">遊說200間店鋪加入</span>
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
          <span className="description">遊說400間店鋪加入</span>
        </span>
      </Handle>
      <WhiteSpace />
    </Handles>
  );
};
