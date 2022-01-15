import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const NewTransaction = ({ title, editable, closeModal, submitTransaction }) => {
  const [descript, setDescript] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const {
    transactions,
    modal: { id },
  } = useSelector((state) => state);
  useEffect(() => {
    if (editable) {
      const transactionsCopy = [...transactions];

      let editableTransaction = transactionsCopy.filter(
        (transac) => transac.id === id
      )[0];
      if (editableTransaction) {
        setDescript(editableTransaction.description);
        setValue(editableTransaction.value);
        setIsExpense(editableTransaction.isExpense);
      }

      //set the States for the one we are editing based on the params id
    }
  }, [editable, id]);
  const resetForm = (ev) => {
    ev.preventDefault();
    setDescript("");
    setValue("");
    setIsExpense(true);
    if (editable) {
      closeModal();
    }
  };

  const manageValue = (ev) => {
    const number = ev.target.value;

    if (Number(number) >= 0) {
      setValue(number);
    }
  };

  const toggleIsExpense = () => {
    setIsExpense(!isExpense);
  };

  const receiveSubmit = (ev) => {
    ev.preventDefault();

    submitTransaction({ description: descript, value, isExpense });
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Form onSubmit={receiveSubmit}>
        <InfoWrapper>
          <InputWrapper style={{ width: "100%" }}>
            <Label htmlFor="descriptionInput">Description</Label>
            <TextInput
              type="text"
              id="descriptionInput"
              placeholder="Transaction"
              value={descript}
              onChange={(ev) => setDescript(ev.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <DollarSign />
            <Label htmlFor="AmountInput">Value</Label>
            <TextInput
              style={{ paddingLeft: "15px" }}
              type="text"
              id="AmountInput"
              placeholder="00.00"
              value={value}
              onChange={manageValue}
            />
          </InputWrapper>
        </InfoWrapper>
        {!editable && (
          <ChoicesWrapper>
            <ChoiceLabel htmlFor="expense">
              <ChoiceButton
                type="radio"
                value="expense"
                id="expense"
                name="transactionType"
                checked={isExpense}
                onChange={toggleIsExpense}
              />
              Expense
            </ChoiceLabel>
            <ChoiceLabel htmlFor="income">
              <ChoiceButton
                type="radio"
                value="income"
                id="income"
                name="transactionType"
                checked={!isExpense}
                onChange={toggleIsExpense}
              />
              Income
            </ChoiceLabel>
          </ChoicesWrapper>
        )}
        <ButtonsWrapper>
          <FancyOr />
          <ActionButton onClick={resetForm}>Cancel</ActionButton>
          <ActionButton type="submit" btnType="submit">
            Ok
          </ActionButton>
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
};

export default NewTransaction;

const Wrapper = styled.div`
  margin-top: 14px;
`;

const Title = styled.div`
  font-weight: bold;
  margin: 5px 0;
  font-size: 1em;
  margin-left: 5%;
`;

const Form = styled.form``;

const InfoWrapper = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  gap: 3px;
  position: relative;
`;

const TextInput = styled.input`
  padding: 8px 5px;
  outline: none;
  font-family: inherit;
  border: 1px solid #d1cece;
  border-radius: 2px;
`;

const DollarSign = styled.div`
  position: absolute;
  ::after {
    content: "$";
  }
  bottom: 7px;
  left: 5px;
`;

const Label = styled.label`
  margin-left: 3px;
`;

const ButtonsWrapper = styled.div`
  position: relative;
  margin-left: 3px;
`;

const ChoiceButton = styled.input``;

const ChoiceLabel = styled.label`
  cursor: pointer;
  width: 100px;
  border: 1px solid #dfdddd;
  border-radius: 2px;
  transition: 300ms ease;
  input:checked {
  }
`;

const ChoicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 5px;
  gap: 5px;
`;

const ActionButton = styled.button`
  cursor: pointer;
  padding: 6px 8px;
  padding-left: ${({ btnType }) => btnType === "submit" && "15px"};
  padding-right: ${({ btnType }) => btnType !== "submit" && "15px"};
  border: none;
  border-radius: 3px;
  border-bottom-left-radius: ${({ btnType }) => btnType === "submit" && "0px"};
  border-top-left-radius: ${({ btnType }) => btnType === "submit" && "0px"};
  border-bottom-right-radius: ${({ btnType }) => btnType !== "submit" && "0px"};
  border-top-right-radius: ${({ btnType }) => btnType !== "submit" && "0px"};
  outline: none;
  margin: 0px 2px;
  background: none;
  transition: 200ms ease;
  background: ${({ btnType }) =>
    btnType === "submit" ? "#5165d6" : "#d6d5d5"};

  color: ${({ btnType }) => (btnType === "submit" ? "white" : "black")};
`;

const FancyOr = styled.div`
  position: absolute;
  ::after {
    content: "or";
  }
  background: white;
  border-radius: 50px;
  font-size: 13px;
  padding: 3px 5px;
  left: 56.5px;
  top: 2.5px;
  color: #7e7b7b;
`;
