import React from "react";
import styled from "styled-components";
import Transaction from "./Transaction";
import { useSelector } from "react-redux";

const History = () => {
  const transactions = useSelector((state) => state.transactions);
  return (
    <Wrapper>
      <Title>History</Title>
      <Transactions>
        {transactions.map((transac) => {
          return <Transaction key={transac.id} transaction={transac} />;
        })}
      </Transactions>
    </Wrapper>
  );
};

export default History;

const Wrapper = styled.div`
  margin-top: 14px;
`;
const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin: 5px 0;
  font-size: 1em;
  margin-left: 5%;
`;
const Transactions = styled.div`
  width: 98%;
  margin-left: 1%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
