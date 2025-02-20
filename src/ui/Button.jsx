import styled, { css } from "styled-components";

const variations = {
  primary: css`
    color: var(--color-primary-1);
    background-color: var(--color-primary-5);
    border: 1.5px solid var(--color-primary-8);
    box-shadow: 0.35rem 0.35rem 0 var(--color-primary-10);

    &:hover:active,
    &:focus {
      border: 1px solid var(--color-primary-8);
    }
  `,
  secondary: css`
    color: var(--color-secondary-6);
    background-color: var(--color-secondary-1);
    border: 1.5px solid var(--color-secondary-7);
    box-shadow: 0.35rem 0.35rem 0 var(--color-secondary-7);

    &:hover:active,
    &:focus {
      border: 1px solid var(--color-secondary-2);
    }
  `,
  danger: css`
    color: var(--color-red-1);
    background-color: var(--color-red-2);
    border: 1.5px solid var(--color-red-3);
    box-shadow: 0.35rem 0.35rem 0 var(--color-red-3);
    &:hover,
    :active,
    &:focus {
      border: 1px solid var(--color-red-3);
    }
  `,
};

const Button = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  transition: 0.2s;
  ${(props) => variations[props.variation]}

  &:hover {
    box-shadow: none;
  }

  &:active {
    transform: scale(0.9);
  }
`;

Button.defaultProps = {
  variation: "primary",
};

export default Button;
