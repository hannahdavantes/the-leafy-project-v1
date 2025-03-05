import { useState } from "react";

export function useMultiStepForm(forms) {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  function nextForm() {
    setCurrentFormIndex((i) => {
      if (i >= forms.length - 1) return i;
      return i + 1;
    });
  }

  function previousForm() {
    setCurrentFormIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  return {
    currentFormIndex,
    currentForm: forms[currentFormIndex],
    forms,
    isFirstForm: currentFormIndex === 0,
    isLastForm: currentFormIndex === forms.length - 1,
    nextForm,
    previousForm,
  };
}
