import { useFormContext } from "react-hook-form";
import FormGroup from "./FormGroup";
import Input from "./Input";
import { useMultiStepFormContext } from "./MultiStepForm";
import { useEffect } from "react";

function RandomForm() {
  const { setTitle } = useMultiStepFormContext();

  useEffect(() => {
    setTitle("Random");
  }, [setTitle]);

  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <FormGroup label="Random" error={errors?.random?.message}>
        <Input
          type="text"
          id="random"
          {...register("random", {
            required: "Please put your address",
          })}
        />
      </FormGroup>
    </>
  );
}

export default RandomForm;
