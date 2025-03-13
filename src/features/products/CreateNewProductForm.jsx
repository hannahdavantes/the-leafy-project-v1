import styled from "styled-components";

import { MultiStepForm } from "../../ui/multi-step-form/MultiStepForm";
import FormStep from "../../ui/multi-step-form/FormStep";
import NewProductCategoryForm from "./NewProductCategoryForm";
import NewProductInformationForm from "./NewProductInformationForm";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function CreateNewProductForm() {
  function handleSubmit() {
    alert("SUBMITED FROM CREATENEWPRODUCTFORM");
  }
  return (
    <Container>
      <MultiStepForm onSubmit={handleSubmit}>
        <FormStep>
          <NewProductInformationForm />
        </FormStep>
        <FormStep>
          <NewProductCategoryForm />
        </FormStep>
      </MultiStepForm>
    </Container>
  );
}

export default CreateNewProductForm;
