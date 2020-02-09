import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
//
import styled from "styled-components";
//
const StyledGoalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  flex-direction: row;
  align-items: center;
  max-width: 480px;
  margin: 20px auto;
`;
const GoalRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`;
const Current = styled.div`
  font-size: 1.6rem;
  margin-bottom: 4px;
  font-weight: bold;
  color: var(--orange);
  &[format="money"] {
    &::before {
      content: "$";
      position: relative;
    }
  }
`;
const Goal = styled.small`
  font-size: 0.8rem;
  vertical-align: bottom;
  color: var(--sub-text);
`;
const StyledProgress = styled.div`
  grid-column: 1 / -1;
  position: relative;
  margin-top: 20px;
  padding-top: 3rem;
  .progress-point {
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--sub-text);
  }
  .start-point {
    position: absolute;
    left: 0;
    top: 0;
  }
  .target-point {
    position: absolute;
    left: 50%;
    top: 0;
  }
  progress {
    overflow: visible;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 20px;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border: 2px solid var(--border);
      border-radius: 50%;
    }
    &::-webkit-progress-value {
      background-color: var(--orange) !important;
    }
  }
`;
//
export default props => {
  const targetAmount = 133000;
  const targetParticipant = 700;
  const [currentAmount, setCurrentAmount] = useState(20000);
  const [currentParticipant, setCurrentParticipant] = useState(200);
  const [progress, setProgress] = useState(10);
  useEffect(() => {
    let hdlr = setInterval(function() {
      if (document.querySelectorAll(".enWidget__fill__count").length === 2) {
        const enCount = document.querySelectorAll(".enWidget__fill__count");
        setCurrentAmount(parseInt(enCount[0].innerText.substr(1), 10)); // return fr amount
        setCurrentParticipant(parseInt(enCount[1].innerText, 10)); // return number of uni particaipants
        clearInterval(hdlr);
      }
    }, 1000);
    //
    let progressPercent = (currentAmount / targetAmount) * 100;
    setProgress(progressPercent < 1 ? 1 : progressPercent);
  });
  return (
    <StyledGoalWrapper>
      <StyledProgress>
        <span className="progress-point start-point">募資開始</span>
        <span className="progress-point target-point">募資成功</span>
        <motion.progress
          className="progress is-small"
          value={parseInt(progress, 10)}
          max="100"
        ></motion.progress>
      </StyledProgress>
      <GoalRow>
        <Current format="money">{currentAmount.toLocaleString()}</Current>
        <Goal>全年目標：${targetAmount.toLocaleString()}</Goal>
      </GoalRow>
      <GoalRow>
        <Current>{currentParticipant.toLocaleString()}人</Current>
        <Goal>全年目標：{targetParticipant.toLocaleString()}人</Goal>
      </GoalRow>
    </StyledGoalWrapper>
  );
};
