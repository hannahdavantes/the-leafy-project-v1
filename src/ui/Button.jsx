import styled, { css } from "styled-components";
const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    font-weight: 600;
    text-transform: capitalize;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    min-width: 24rem;
  `,
  large: css`
    font-size: 2rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.35rem;
    width: 80%;
  `,
};

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
  border-radius: 2rem;
  transition: 0.2s;
  text-align: center;
  align-items: center;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  
  & span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
  }

  &:hover {
    box-shadow: none;
  }

  &:active {
    transform: scale(0.9);
  }
`;

Button.defaultProps = {
  size: "small",
  variation: "primary",
};

export default Button;
