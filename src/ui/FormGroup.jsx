import styled from "styled-components";

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0;
  margin: 1.2rem 0;
`;

const InputLabel = styled.label`
  display: flex;
  gap: 1.6rem;
  font-size: 2rem;
  text-transform: uppercase;
  padding-bottom: 1rem;
`;

const ErrorLabel = styled.span`
  font-size: 1.2rem;
  color: var(---color-red-3);
`;

function FormGroup({ label, error, children }) {
  return (
    <StyledFormGroup>
      {label && <InputLabel htmlFor={children.props.id}>{label}</InputLabel>}
      {children}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </StyledFormGroup>
  );
}

export default FormGroup;
