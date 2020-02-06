import React, { useState, useEffect } from "react";
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
  margin: 20px 0;
`;
const GoalRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
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
const StyledProgress = styled.progress`
  grid-column: 1 / -1;
  &::-webkit-progress-value {
    background-color: var(--orange) !important;
  }
`;
//
export default props => {
  const { amount, people } = props;
  const [summary, setSummary] = useState(null);
  useEffect(() => {
    const summaryEndPoint =
      "https://e-activist.com/ea-dataservice/data.service?service=EaDataCapture&token=7a06c0fc-32fe-43f1-8a1b-713b3ea496e1&campaignId=168645&contentType=json&resultType=summary";
    fetch(summaryEndPoint)
      .then(response => {
        response.json();
      })
      .then(json => {
        console.log(json);
        setSummary(json);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <StyledGoalWrapper>
      <GoalRow>
        <Current format="money">{amount.current}</Current>
        <Goal>{amount.goal}</Goal>
      </GoalRow>
      <GoalRow>
        <Current>{people.current}人</Current>
        <Goal>{people.goal}</Goal>
      </GoalRow>
      <StyledProgress className="progress is-small" value="30" max="100">
        15%
      </StyledProgress>
    </StyledGoalWrapper>
  );
};
