import { types as transactionTypes } from "../actions/transactions.actions";
const initialState = [];

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case transactionTypes.ADD_TRANSACTION_RESULT: {
      return [...state, { ...action.payload }];
    }
    case transactionTypes.REMOVE_TRANSACTION_RESULT: {
      return state.filter((transaction) => transaction.id !== action.id);
    }
    case transactionTypes.EDIT_TRANSACTION_RESULT: {
      return state.map((transac) => {
        if (transac.id === action.editedTransaction.id) {
          return action.editedTransaction;
        } else {
          return transac;
        }
      });
    }
    case transactionTypes.GET_TRANSACTIONS: {
      return state;
    }
    case transactionTypes.RECEIVE_TRANSACTIONS: {
      return action.data;
    }
    case transactionTypes.RECEIVE_TRANSACTION_VALUE: {
      return state.map((entry) => {
        if (entry.id === action.data.id) {
          return { ...entry, ...action.data };
        } else {
          return entry;
        }
      });
    }
    default:
      return state;
  }
};
