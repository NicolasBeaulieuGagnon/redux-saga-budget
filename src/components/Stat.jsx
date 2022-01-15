import React from "react";
import styled from "styled-components";

const Stat = ({ color, stat }) => {
  return <Wrapper color={color}>{stat}</Wrapper>;
};

export default Stat;

const Wrapper = styled.div`
  color: ${({ color }) => color};
  font-size: 17px;
`;
