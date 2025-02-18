import styled from "styled-components";
import Heading from "./Heading";
import NavBar from "./NavBar";

const StyledHeader = styled.header`
  background-color: var(--color-primary-2);
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--color-brown-black-1);
  padding: 1rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Heading as="h1">THE LEAFY PROJECT</Heading>
      <NavBar />
    </StyledHeader>
  );
}

export default Header;
