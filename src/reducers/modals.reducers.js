import { types as modalTypes } from "../actions/modal.actions";
const initialState = {
  isOpen: false,
  id: "",
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.OPEN_MODAL:
      return { ...state, isOpen: true, id: action.id };
    case modalTypes.CLOSE_MODAL:
      return { ...initialState };
    default:
      return state;
  }
};
