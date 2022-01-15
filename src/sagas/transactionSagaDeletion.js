import axios from "axios";
import { take, call, put } from "redux-saga/effects";
import {
  removeTransactionResult,
  types as transactionTypes,
} from "../actions/transactions.actions";

const deleteEntry = (id) => {
  axios.delete(`http://localhost:8000/transactions/${id}`);
  axios.delete(`http://localhost:8000/values/${id}`);
};

export function* deleteEntrySaga() {
  //this while true creates a blocking saga to make sure that spam clicking isn't
  //gonna try and delete multiple times, it will wait for the 1st click to finish its process

  while (true) {
    const { id } = yield take(transactionTypes.REMOVE_TRANSACTION);
    yield call(deleteEntry, id);
    yield put(removeTransactionResult({ id }));
  }
}
