import { useFormContext } from "react-hook-form";

import FormGroup from "./FormGroup";
import Input from "./Input";
import { useMultiStepFormContext } from "./MultiStepForm";
import { useEffect } from "react";

function NameForm() {
  const { setTitle } = useMultiStepFormContext();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setTitle("User Data");
  }, [setTitle]);

  return (
    <>
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
            required: "Please put your last name",
          })}
        />
      </FormGroup>
    </>
  );
}

export default NameForm;
