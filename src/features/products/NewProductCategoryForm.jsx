import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { useMultiStepFormContext } from "../../ui/multi-step-form/MultiStepForm";

import FormGroup from "../../ui/FormGroup";
import MiniSpinner from "../../ui/MiniSpinner";
import Select from "../../ui/Select";

import { useParentCategories } from "../categories/useParentCategories";
import { useSubCategories } from "../categories/useSubCategories";

function NewProductCategoryForm() {
  const { setTitle, onSubmit } = useMultiStepFormContext();

  const {
    watch,
    register,
    resetField,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setTitle("New Product");
  }, [setTitle]);

  const { data: parentCategories, isLoading: isLoadingParentCategories } =
    useParentCategories();

  const selectedParentCategory = watch("parent_category", 1);
  const selectedSubCategory = watch("sub-category", 1);

  const { data: subCategories, isLoading: isLoadingSubCategories } =
    useSubCategories(selectedParentCategory);

  return (
    <>
      <FormGroup label="Category">
        {isLoadingParentCategories ? (
          <MiniSpinner />
        ) : (
          <Select
            defaultValue={"1"}
            {...register("parent_category", {
              onChange: () => {
                resetField("sub_category");
              },
            })}
          >
            <option disabled value="1">
              Please select a category...
            </option>
            {parentCategories.map(({ category_id, category_name }) => (
              <option key={category_id} value={category_id}>
                {category_name}
              </option>
            ))}
          </Select>
        )}
      </FormGroup>
      {isLoadingSubCategories ? (
        <MiniSpinner />
      ) : (
        subCategories?.length > 0 &&
        selectedParentCategory !== 1 && (
          <FormGroup label="Sub-category">
            <Select defaultValue={"0"} {...register("sub-category")}>
              <option disabled value="0">
                Please select a sub-category...
              </option>
              {subCategories.map(({ category_id, category_name }) => (
                <option key={category_id} value={category_id}>
                  {category_name}
                </option>
              ))}
            </Select>
          </FormGroup>
        )
      )}
    </>
  );
}

export default NewProductCategoryForm;
