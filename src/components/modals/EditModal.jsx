import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closeEditModal } from "../../actions/modal.actions";
import { editTransaction } from "../../actions/transactions.actions";
import NewTransaction from "../NewTransaction";

const EditModal = () => {
  const dispatch = useDispatch();
  const {
    transactions,
    modal: { isOpen, id },
  } = useSelector((state) => state);
  const editSelectedTransaction = (transaction) => {
    let transac = [...transactions].filter((item) => item.id === id)[0];
    transac = { ...transac, ...transaction };
    dispatch(editTransaction({ editedTransaction: { ...transac } }));
    dispatch(closeEditModal());
  };

  return (
    <ModalBg isOpen={isOpen}>
      <Modal>
        <NewTransaction
          title="Edit Transaction"
          editable={true}
          closeModal={() => dispatch(closeEditModal())}
          submitTransaction={editSelectedTransaction}
        />
      </Modal>
    </ModalBg>
  );
};

export default EditModal;

const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #3a3a3a37;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  z-index: 2000;
`;

const Modal = styled.div`
  background: white;
  padding: 25px;
  border-radius: 2px;
  box-shadow: 0 0 5px 2px #b3b0b0;
`;

const Title = styled.div``;

const Description = styled.div``;

const ActionButtons = styled.button``;
