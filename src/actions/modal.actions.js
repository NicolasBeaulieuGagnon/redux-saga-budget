export const types = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

export const openEditModal = (payload) => {
  return { type: types.OPEN_MODAL, ...payload };
};
export const closeEditModal = (payload) => {
  return { type: types.CLOSE_MODAL, ...payload };
};
