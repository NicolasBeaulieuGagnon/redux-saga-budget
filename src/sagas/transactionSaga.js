import { take, call, put, fork } from "redux-saga/effects";
import axios from "axios";

import {
  receiveTransactions,
  receiveTransactionValue,
  types as transactionTypes,
} from "../actions/transactions.actions";

export function* getAllEntries() {
  yield take(transactionTypes.GET_TRANSACTIONS);
  const result = yield call(axios, "http://localhost:8000/transactions");
  yield put(receiveTransactions({ data: result.data }));
}

// main reason we created this was to get an example of using fork
// here we use fork get the values of all our entries individually
function* getEntryDetail(id) {
  const { data } = yield call(axios, `http://localhost:8000/values/${id}`);
  yield put(receiveTransactionValue({ data }));
}

export function* getAllEntriesDetails() {
  const { data } = yield take(transactionTypes.RECEIVE_TRANSACTIONS);
  for (let index = 0; index < data.length; index++) {
    const entry = data[index];
    yield fork(getEntryDetail, entry.id);
  }
}
