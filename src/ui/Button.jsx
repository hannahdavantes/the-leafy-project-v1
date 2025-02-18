import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: var(--color-primary-1);
  background-color: var(--color-primary-5);
  border: 1.5px solid var(--color-primary-8);
  box-shadow: 0.35rem 0.35rem 0 var(--color-primary-10);
  transition: 0.2s;

  &:hover {
    box-shadow: none;
    border: 1px solid var(--color-primary-8);
  }

  &:active {
    transform: scale(0.9);
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
