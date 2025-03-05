import { useForm, useFormContext } from "react-hook-form";

import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Form from "./Form";
import FormGroup from "./FormGroup";
import Input from "./Input";
import { useMultiStepFormContext } from "./MultiStepForm";

function Form2() {
  const { showPreviousForm, showNextForm, formData, setFormData, isFirstForm } =
    useMultiStepFormContext();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: { ...formData } });

  function onSubmit(data) {
    setFormData({ ...formData, ...data });
    console.log(formData);
    showNextForm();
  }

  function onPreviousForm() {
    const formValues = getValues();
    setFormData({ ...formData, ...formValues });
    showPreviousForm();
  }

  function onError() {}

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormGroup label="Address" error={errors?.address?.message}>
        <Input
          type="text"
          id="address"
          {...register("address", {
            required: "Please put your address",
          })}
        />
      </FormGroup>
      <FormGroup label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "Please put your email-address",
          })}
        />
      </FormGroup>

      <ButtonGroup>
        {!isFirstForm && (
          <Button onClick={onPreviousForm}>
            <HiArrowLeft />
            Prev
          </Button>
        )}
        <Button type="submit">
          Next
          <HiArrowRight />
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default Form2;
