import React, { useState, useEffect } from "react";
//
import styled from "styled-components";
//
const StyledGoalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  flex-direction: row;
  align-items: center;
  max-width: 480px;
  padding: 8px 30px;
  margin: 20px 0;
  border-left: 4px solid var(--orange);
`;
const GoalRow = styled.div`
  display: flex;
  flex-direction: column;
`;
const Current = styled.div`
  font-size: 1.8rem;
  margin-bottom: 8px;
  font-weight: bold;
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
`;
//
export default props => {
  const { amount, people } = props;
  const [summary, setSummary] = useState(null);
  useEffect(() => {
    const summaryEndPoint =
      "http://e-activist.com/ea-dataservice/data.service?service=EaDataCapture&token=7a06c0fc-32fe-43f1-8a1b-713b3ea496e1&campaignId=168645&contentType=json&resultType=summary";
    fetch(summaryEndPoint)
      .then(response => {
        response.json();
      })
      .then(response => {
        console.log(response);
        setSummary(response);
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
    </StyledGoalWrapper>
  );
};
