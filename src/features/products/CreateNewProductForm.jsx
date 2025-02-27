import { useForm } from "react-hook-form";

import { useParentCategories } from "../categories/useParentCategories";
import { useSubCategories } from "../categories/useSubCategories";
import { useCreateProduct } from "./useCreateProduct";

import Form from "../../ui/Form";
import FormGroup from "../../ui/FormGroup";
import ButtonGroup from "../../ui/ButtonGroup";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import Select from "../../ui/Select";
import MiniSpinner from "../../ui/MiniSpinner";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

function CreateNewProductForm() {
  const {
    register,
    watch,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { isCreating, createProduct } = useCreateProduct();

  const { data: parentCategories, isLoading: isLoadingParentCategories } =
    useParentCategories();

  const selectedParentCategory = watch("parent_category", 1);

  const { data: subCategories, isLoading: isLoadingSubCategories } =
    useSubCategories(selectedParentCategory);

  function onSubmit(data) {
    const { product_name, description, parent_category, sub_category } = data;
    const category_id = sub_category ? sub_category : parent_category;
    const image = typeof data.image === "string" ? data.image : data.image[0];

    const newProduct = { product_name, description, category_id, image };

    createProduct(
      { product: { ...newProduct, image: image } },
      {
        onSuccess: () => {
          navigate("/products");
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  if (isCreating) return <Spinner />;
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
            {...register("description", {
              required: "Please put a description",
            })}
          />
        </FormGroup>
        <FormGroup label="Image">
          <FileInput id="image" accept="image/*" {...register("image")} />
        </FormGroup>
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
          subCategories?.length > 0 && (
            <FormGroup label="Sub-category">
              <Select defaultValue={null} {...register("sub-category")}>
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
