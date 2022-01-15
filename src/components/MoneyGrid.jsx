import React from "react";
import styled from "styled-components";
import Statistic from "./Statistic";
import { useSelector } from "react-redux";

const MoneyGrid = () => {
  const transactions = useSelector((state) => state.transactions);
  const income = transactions.reduce((total, item) => {
    if (!item.isExpense) {
      return total + Number(item.value);
    } else {
      return total;
    }
  }, 0);
  const expense = transactions.reduce((total, item) => {
    if (item.isExpense) {
      return total + Number(item.value);
    } else {
      return total;
    }
  }, 0);
  return (
    <Wrapper>
      <Statistic title="Income" color="#07940c" stat={income.toFixed(2)} />
      <Border />
      <Statistic title="Expenses" color="#a60603" stat={expense.toFixed(2)} />
    </Wrapper>
  );
};

export default MoneyGrid;

const Wrapper = styled.div`
  width: 98%;
  margin-left: 1%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  border: 1px solid #dfdddd;
  border-radius: 2px;
  box-shadow: 0 0 3px 1px #ecebeb;
`;

const Border = styled.div`
  width: 1px;
  background: #dfdddd;
  margin: 5px 0;
  border-radius: 2px;
`;
