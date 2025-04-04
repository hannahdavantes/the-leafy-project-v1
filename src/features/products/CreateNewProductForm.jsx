import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useCreateProduct } from "./useCreateProduct";

import { MultiStepForm } from "../../ui/multi-step-form/MultiStepForm";

import FormStep from "../../ui/multi-step-form/FormStep";
import NewProductCategoryForm from "./NewProductCategoryForm";
import NewProductInformationForm from "./NewProductInformationForm";
import NewProductImageForm from "./NewProductImageForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function CreateNewProductForm() {
  const { isCreating, createProduct } = useCreateProduct();

  const navigate = useNavigate();

  function handleFormData(formData) {
    const { product_name, description, parent_category, sub_category } =
      formData;
    const category_id = sub_category ? sub_category : parent_category;
    const image =
      typeof formData.image === "string" ? formData.image : formData.image[0];

    const newProduct = { product_name, description, category_id, image };

    console.log(newProduct);

    createProduct(
      { product: { ...newProduct, image: image } },
      {
        onSuccess: () => {
          navigate("/products");
        },
      }
    );
  }

  return (
    <Container>
      <MultiStepForm finalSubmit={handleFormData}>
        <FormStep>
          <NewProductInformationForm />
        </FormStep>
        <FormStep>
          <NewProductCategoryForm />
        </FormStep>
        <FormStep>
          <NewProductImageForm />
        </FormStep>
      </MultiStepForm>
    </Container>
  );
}

export default CreateNewProductForm;
