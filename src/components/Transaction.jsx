import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { removeTransaction } from "../actions/transactions.actions";
import { openEditModal } from "../actions/modal.actions";

const Transaction = ({
  transaction: { description, value, isExpense, id },
}) => {
  const dispatch = useDispatch();

  return (
    <Wrapper isExpense={isExpense}>
      <Reason>{description}</Reason>
      <Options>
        <Money>
          <span>$</span>
          {value}
        </Money>
        <Option btnType="edit" onClick={() => dispatch(openEditModal({ id }))}>
          <AiOutlineEdit />
        </Option>
        <Option
          onClick={() => dispatch(removeTransaction({ id }))}
          btnType="delete"
        >
          <AiOutlineDelete />
        </Option>
      </Options>
    </Wrapper>
  );
};

export default Transaction;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dfdddd;
  box-shadow: 0 0 3px 1px #ecebeb;
  padding: 12px 10px 10px;
  border-top: ${({ isExpense }) =>
    isExpense ? "3px solid #c0050586" : "3px solid #18810365"};
  border-radius: 5px;
`;

const Reason = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;

const Money = styled.div`
  margin-right: 30px;
  span {
    font-weight: bold;
    margin-right: 1px;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.button`
  cursor: pointer;
  padding: 5px 5px 3px;
  border: 1px solid #dfdddd;
  border-radius: 5px;
  outline: none;
  margin: 0px 2px;
  background: none;
  transition: 200ms ease;
  :hover {
    background: ${({ btnType }) =>
      btnType === "edit" ? "#115503" : "#6e0202"};
    color: white;
  }
`;
