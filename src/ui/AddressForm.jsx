import { useFormContext } from "react-hook-form";
import FormGroup from "./FormGroup";
import Input from "./Input";
import { useMultiStepFormContext } from "./multi-step-form/MultiStepForm";
import { useEffect } from "react";

function AddressForm() {
  const { setTitle } = useMultiStepFormContext();

  const {
    register,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setTitle("More Information");
  }, [setTitle]);

  return (
    <>
      <FormGroup label="Address" error={errors?.address?.message}>
        <Input
          type="text"
          id="address"
          {...register("address", {
            required: "Please put your home address",
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
    </>
  );
}

export default AddressForm;
