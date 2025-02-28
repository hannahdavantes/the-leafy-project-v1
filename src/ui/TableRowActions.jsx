import { HiEye, HiPencil, HiTrash } from "react-icons/hi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
`;

const ButtonIcon = styled.button`
  border: none;
  background-color: var(--color-off-white-2);
  color: var(--color-brown-black-1);
  font-size: 2.3rem;

  &:hover {
    color: var(--color-primary-7);
  }
`;

function TableRowActions({ viewHandler }) {
  return (
    <Container>
      <ButtonIcon onClick={viewHandler}>
        <HiEye />
      </ButtonIcon>
      <ButtonIcon>
        <HiPencil />
      </ButtonIcon>
      <ButtonIcon>
        <HiTrash />
      </ButtonIcon>
    </Container>
  );
}

export default TableRowActions;
