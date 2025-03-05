import { useForm } from "react-hook-form";

import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Form from "./Form";
import FormGroup from "./FormGroup";
import Input from "./Input";
import { useMultiStepFormContext } from "./MultiStepForm";

function Form1() {
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
      <FormGroup label="First Name" error={errors?.firstname?.message}>
        <Input
          type="text"
          id="firstname"
          {...register("firstname", {
            required: "Please put your first name",
          })}
        />
      </FormGroup>
      <FormGroup label="Last Name" error={errors?.lastname?.message}>
        <Input
          type="text"
          id="lastname"
          {...register("lastname", {
            required: "Please put your first name",
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

export default Form1;
