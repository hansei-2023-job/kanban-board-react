import { useCallback } from "react";
import Column from "../components/Column/Column";
import CardUpdateModal from "../components/Modal/CardUpdateModal";
import Modal from "../components/Modal/Modal";
import Title from "../components/Title/Title";
import Workflow from "../components/Workflow/Workflow";
import Container from "../components/layout/Container/Container";
import useModal from "../hooks/useModal";

const KanbanBoard = () => {
  const [isOpen, openModal, closeModal] = useModal();

  const openCard = useCallback(() => {
    openModal();
  }, []);

  return (
    <>
      <Container>
        <Title>Kanban Board</Title>
        <Workflow>
          <Column title="Todo" theme="color1" openCard={openCard}></Column>
          <Column
            title="In Progress"
            theme="color2"
            openCard={openCard}
          ></Column>
          <Column title="Done" theme="color3" openCard={openCard}></Column>
        </Workflow>
      </Container>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <CardUpdateModal closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default KanbanBoard;
