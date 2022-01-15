import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  addTransactionResult,
  types as transactionTypes,
} from "../actions/transactions.actions";

const addEntryToDb = async ({ payload }) => {
  const valueObject = {
    id: payload.id,
    value: payload.value,
    isExpense: payload.isExpense,
  };
  const transactionObject = {
    id: payload.id,
    description: payload.description,
    date: payload.date,
  };
  await axios.post(`http://localhost:8000/transactions/`, {
    ...transactionObject,
  });
  await axios.post(`http://localhost:8000/values/`, { ...valueObject });
};

function* addEntry({ payload }) {
  yield call(addEntryToDb, { payload });
  yield put(addTransactionResult({ payload }));
}

export function* addEntrySaga() {
  yield takeLatest(transactionTypes.ADD_TRANSACTION, addEntry);
}
