import styled from "styled-components";

import { MultiStepForm } from "../../ui/multi-step-form/MultiStepForm";
import FormStep from "../../ui/multi-step-form/FormStep";
import ProductInformationForm from "./ProductInformationForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function CreateNewProductForm() {
  console.log("new form");
  function handleSubmit() {
    alert("submitted");
  }
  return (
    <Container>
      <MultiStepForm onSubmit={handleSubmit}>
        <FormStep>
          <ProductInformationForm />
        </FormStep>
      </MultiStepForm>
    </Container>
  );
}

export default CreateNewProductForm;
