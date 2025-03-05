import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import { useMultiStepFormContext } from "./MultiStepForm";

import Button from "./Button";
import Form from "./Form";
import ButtonGroup from "./ButtonGroup";

const NextButton = styled(Button)`
  margin-left: auto;
`;

function FormStep({ children }) {
  const {
    showPreviousForm,
    showNextForm,
    formData,
    setFormData,
    isFirstForm,
    isLastForm,
  } = useMultiStepFormContext();

  const methods = useForm({ defaultValues: { ...formData } });

  function onSubmit(data) {
    console.log("FORMDATA", data);
    setFormData({ ...formData, ...data });
    if (!isLastForm) {
      showNextForm();
    } else {
      // console.log(formData);
      console.log("SUBMIT");
    }
  }

  function onPreviousForm() {
    const formValues = methods.getValues();
    setFormData({ ...formData, ...formValues });
    showPreviousForm();
  }

  function onError() {}

  return (
    <FormProvider {...methods}>
      <Form type="step" onSubmit={methods.handleSubmit(onSubmit, onError)}>
        {children}
        <ButtonGroup>
          {!isFirstForm && (
            <Button onClick={onPreviousForm}>
              <span>
                <HiArrowLeft />
                Prev
              </span>
            </Button>
          )}
          <NextButton type="submit">
            <span>
              {isLastForm ? "Submit" : "Next"}
              <HiArrowRight />
            </span>
          </NextButton>
        </ButtonGroup>
      </Form>
    </FormProvider>
  );
}

export default FormStep;
