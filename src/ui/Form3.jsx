import { useForm } from "react-hook-form";

import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Form from "./Form";
import FormGroup from "./FormGroup";
import Input from "./Input";
import { useContext } from "react";
import { useMultiStepFormContext } from "./MultiStepForm";

function Form3() {
  const {
    showPreviousForm,
    showNextForm,
    formData,
    setFormData,
    isLastForm,
    isFirstForm,
  } = useMultiStepFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setFormData({ ...formData, ...data });
    console.log(formData);
  }

  function onError() {}

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormGroup label="Random" error={errors?.random?.message}>
        <Input
          type="text"
          id="random"
          {...register("random", {
            required: "Please put your address",
          })}
        />
      </FormGroup>

      <ButtonGroup>
        {!isFirstForm && (
          <Button onClick={showPreviousForm}>
            <HiArrowLeft />
            Prev
          </Button>
        )}
        <Button type={isLastForm ? "submit" : "button"} onClick={showNextForm}>
          {isLastForm ? "Submit" : "Next"}
          <HiArrowRight />
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default Form3;
