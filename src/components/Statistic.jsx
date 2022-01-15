import React from "react";
import styled from "styled-components";
import Stat from "./Stat";

const Statistic = ({ title, color, stat }) => {
  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Stat color={color} stat={stat ? `$ ${stat}` : "0.00"} />
    </Wrapper>
  );
};

export default Statistic;

const Wrapper = styled.div`
  padding: 9px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div``;
