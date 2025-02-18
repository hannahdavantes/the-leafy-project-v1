import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavBar = styled.nav`
  padding: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-gray-9);
    font-size: 2rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-primary-8);
    font-size: 2.2rem;
    font-weight: 800;
    text-decoration: underline;
  }

  /* & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  } */
`;

function NavBar() {
  return (
    <StyledNavBar>
      <NavList>
        <li>
          <StyledNavLink to="/home">
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">
            <span>Products</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/services">
            <span>Services</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/aboutus">
            <span>About Us</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">
            <span>Contact Us</span>
          </StyledNavLink>
        </li>
      </NavList>
    </StyledNavBar>
  );
}

export default NavBar;
