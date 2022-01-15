import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Balance = () => {
  const transactions = useSelector((state) => state.transactions);
  const balance = transactions.reduce((total, item) => {
    if (item.isExpense) {
      return total - Number(item.value);
    } else {
      return total + Number(item.value);
    }
  }, 0);
  return (
    <Wrapper>
      <Title>Your Balance:</Title>
      <Info>${balance ? balance.toFixed(2) : 0}</Info>
    </Wrapper>
  );
};

export default Balance;

const Wrapper = styled.div`
  margin-left: 5%;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin: 5px 0;
  font-size: 1em;
`;

const Info = styled.div`
  font-size: 1.5em;
`;
