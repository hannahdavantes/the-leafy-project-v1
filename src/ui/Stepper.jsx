import styled from "styled-components";
import { FaCircle } from "react-icons/fa";

const StyledStepper = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ActiveStep = styled.span`
  font-size: 2rem;
  color: var(--color-primary-7);
`;

const Step = styled.span`
  font-size: 2rem;
  color: var(--color-gray-7);
`;

function Stepper({ steps, currentStepIndex }) {
  if (steps.length > 0) {
    return (
      <StyledStepper>
        {steps.map((step, index) =>
          index === currentStepIndex ? (
            <ActiveStep key={index}>
              <FaCircle />
            </ActiveStep>
          ) : (
            <Step key={index}>
              <FaCircle />
            </Step>
          )
        )}
      </StyledStepper>
    );
  } else {
    return null;
  }
}

export default Stepper;
