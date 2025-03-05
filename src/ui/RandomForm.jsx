import { useFormContext } from "react-hook-form";
import FormGroup from "./FormGroup";
import Input from "./Input";
import { useMultiStepFormContext } from "./MultiStepForm";

function RandomForm() {
  const { setTitle } = useMultiStepFormContext();

  setTitle("Random");
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
