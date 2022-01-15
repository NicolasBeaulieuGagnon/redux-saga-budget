import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { transactionReducer } from "../reducers/transactions.reducers";
import { modalReducer } from "../reducers/modals.reducers";

import createSagaMiddleware from "redux-saga";
import { initSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const storeConfig = () => {
  const store = createStore(
    combineReducers({ transactions: transactionReducer, modal: modalReducer }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  initSaga(sagaMiddleware);
  return store;
};

export default storeConfig;
