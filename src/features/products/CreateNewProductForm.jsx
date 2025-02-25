import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { useParentCategories } from "../categories/useParentCategories";
import { useSubCategories } from "../categories/useSubCategories";

import Form from "../../ui/Form";
import FormGroup from "../../ui/FormGroup";
import ButtonGroup from "../../ui/ButtonGroup";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import Select from "../../ui/Select";
import MiniSpinner from "../../ui/MiniSpinner";

function CreateNewProductForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: parentCategories, isLoading: isLoadingParentCategories } =
    useParentCategories();

  const selectedParentCategory = watch("parentCategory") || 0;

  const { data: subCategories, isLoading: isLoadingSubCategories } =
    useSubCategories(selectedParentCategory);

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <>
      <h1>ADD NEW PRODUCT</h1>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
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
            {...register("product_description", {
              required: "Please put a description",
            })}
          />
        </FormGroup>
        <FormGroup label="Image" error={errors?.product_name?.message}>
          <FileInput id="image" accept="image/*" />
        </FormGroup>
        <FormGroup label="Category">
          {isLoadingParentCategories ? (
            <MiniSpinner />
          ) : (
            <Select {...register("parentCategory")}>
              <option disabled selected>
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
          subCategories?.length > 0 && (
            <FormGroup label="SubCategory">
              <Select {...register("subCategory")}>
                <option disabled selected>
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
        <ButtonGroup>
          <Button size="medium" variation="danger">
            Cancel
          </Button>
          <Button type="submit" size="medium">
            Create New Product
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
}

export default CreateNewProductForm;
