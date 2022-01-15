import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  editTransactionResult,
  types as transactionTypes,
} from "../actions/transactions.actions";

const editEntryToDb = async ({ editedTransaction: data }) => {
  const valueObject = {
    id: data.id,
    value: data.value,
    isExpense: data.isExpense,
  };
  const transactionObject = {
    id: data.id,
    description: data.description,
    date: data.date,
  };
  await axios.put(`http://localhost:8000/transactions/${data.id}`, {
    ...transactionObject,
  });
  await axios.put(`http://localhost:8000/values/${data.id}`, {
    ...valueObject,
  });
};

function* editEntry({ editedTransaction }) {
  yield call(editEntryToDb, { editedTransaction });
  yield put(editTransactionResult({ editedTransaction }));
}

export function* EditEntrySaga() {
  yield takeLatest(transactionTypes.EDIT_TRANSACTION, editEntry);
}
