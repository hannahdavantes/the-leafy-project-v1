import { useFormContext } from "react-hook-form";
import { useMultiStepFormContext } from "../../ui/multi-step-form/MultiStepForm";
import { useEffect } from "react";
import FormGroup from "../../ui/FormGroup";
import FileInput from "../../ui/FileInput";

function NewProductImageForm() {
  const { setTitle } = useMultiStepFormContext();

  const {
    register,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setTitle("New Product");
  }, [setTitle]);

  return (
    <>
      <FormGroup label="Image">
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormGroup>
    </>
  );
}

export default NewProductImageForm;
