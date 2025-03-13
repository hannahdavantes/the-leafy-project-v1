import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { useMultiStepFormContext } from "../../ui/multi-step-form/MultiStepForm";

import FormGroup from "../../ui/FormGroup";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";

function ProductInformationForm() {
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
      <FormGroup label="Product Name" error={errors?.product_name?.message}>
        <Input
          type="text"
          id="product_name"
          {...register("product_name", {
            required: "Please put a product name",
          })}
        />
      </FormGroup>
      <FormGroup label="Description" error={errors?.description?.message}>
        <TextArea
          type="text"
          id="description"
          {...register("description", {
            required: "Please put a description",
          })}
        />
      </FormGroup>
    </>
  );
}

export default ProductInformationForm;
