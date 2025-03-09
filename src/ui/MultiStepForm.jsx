import { createContext, useContext, useState } from "react";

import Stepper from "./Stepper";
import styled from "styled-components";

const MultiStepFormContext = createContext();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MultiStepForm({ onSubmit, children }) {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [title, setTitle] = useState("");

  function showNextForm() {
    setCurrentFormIndex((i) => {
      if (i >= children.length - 1) return i;
      return i + 1;
    });
  }

  function showPreviousForm() {
    setCurrentFormIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  return (
    <MultiStepFormContext.Provider
      value={{
        showPreviousForm,
        showNextForm,
        isFirstForm: currentFormIndex === 0,
        isLastForm: currentFormIndex === children.length - 1,
        currentFormIndex,
        formData,
        setFormData,
        setTitle,
        onSubmit,
      }}
    >
      <Container>
        <Stepper steps={children} currentStepIndex={currentFormIndex} />
        <h1>{title}</h1>
        {children[currentFormIndex]}
      </Container>
    </MultiStepFormContext.Provider>
  );
}

function useMultiStepFormContext() {
  const context = useContext(MultiStepFormContext);
  if (context === undefined)
    throw new Error(
      "MultiStepFormContext was used outside of the PostProvider"
    );
  return context;
}

export { MultiStepForm, useMultiStepFormContext };
