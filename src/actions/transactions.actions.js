export const types = {
  ADD_TRANSACTION: "ADD_TRANSACTION",
  ADD_TRANSACTION_RESULT: "ADD_TRANSACTION_RESULT",
  REMOVE_TRANSACTION: "REMOVE_TRANSACTION",
  REMOVE_TRANSACTION_RESULT: "REMOVE_TRANSACTION_RESULT",
  EDIT_TRANSACTION: "EDIT_TRANSACTION",
  EDIT_TRANSACTION_RESULT: "EDIT_TRANSACTION_RESULT",
  GET_TRANSACTIONS: "GET_TRANSACTIONS",
  RECEIVE_TRANSACTIONS: "RECEIVE_TRANSACTIONS",
  RECEIVE_TRANSACTION_VALUE: "RECEIVE_TRANSACTION_VALUE",
};

export const addTransaction = (payload) => {
  return { type: types.ADD_TRANSACTION, ...payload };
};

export const addTransactionResult = (payload) => {
  return { type: types.ADD_TRANSACTION_RESULT, ...payload };
};

export const removeTransaction = (payload) => {
  return { type: types.REMOVE_TRANSACTION, ...payload };
};

export const removeTransactionResult = (payload) => {
  return { type: types.REMOVE_TRANSACTION_RESULT, ...payload };
};

export const editTransaction = (payload) => {
  return { type: types.EDIT_TRANSACTION, ...payload };
};
export const editTransactionResult = (payload) => {
  return { type: types.EDIT_TRANSACTION_RESULT, ...payload };
};
export const getTransactions = () => {
  return { type: types.GET_TRANSACTIONS };
};

export const receiveTransactions = (payload) => {
  return { type: types.RECEIVE_TRANSACTIONS, ...payload };
};

export const receiveTransactionValue = (payload) => {
  return { type: types.RECEIVE_TRANSACTION_VALUE, ...payload };
};
