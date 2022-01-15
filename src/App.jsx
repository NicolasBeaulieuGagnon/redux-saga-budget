import { useEffect } from "react";
import styled from "styled-components";
import Balance from "./components/Balance";
import History from "./components/History";
import EditModal from "./components/modals/EditModal";
import MoneyGrid from "./components/MoneyGrid";
import NewTransaction from "./components/NewTransaction";
import { GlobalStyles } from "./GlobalStyles";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import {
  addTransaction,
  getTransactions,
} from "./actions/transactions.actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, []);
  const createNewTransaction = ({ description, value, isExpense }) => {
    const payload = {
      description,
      value,
      isExpense,
      id: uuidv4(),
      date: Date(),
    };
    dispatch(addTransaction({ payload }));
  };
  return (
    <Wrapper>
      <EditModal />
      <GlobalStyles />
      <Header>Budget</Header>
      <Balance />
      <MoneyGrid />
      <History />
      <NewTransaction
        title="Add new Transaction"
        editable={false}
        submitTransaction={createNewTransaction}
      />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "ABeeZee";
`;

const Header = styled.h1`
  margin-top: 0;
  padding-top: 20px;
  text-align: center;
`;
