import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Form from "../../ui/Form";
import FormGroup from "../../ui/FormGroup";
import ButtonGroup from "../../ui/ButtonGroup";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

function CreateNewProductForm() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {}
  return (
    <>
      <h1>ADD NEW PRODUCT</h1>
      <Form type="modal">
        <FormGroup label="Product Name" error={errors?.product_name?.message}>
          <Input type="text" id="product_name" />
        </FormGroup>
        <FormGroup label="Description" error={errors?.description?.message}>
          <TextArea type="text" id="description" />
        </FormGroup>
        <FormGroup label="Image" error={errors?.product_name?.message}>
          <FileInput tid="image" accept="image/*" />
        </FormGroup>
        <ButtonGroup>
          <Button size="medium" variation="danger">
            Cancel
          </Button>
          <Button size="medium">Create New Product</Button>
        </ButtonGroup>
      </Form>
    </>
  );
}

export default CreateNewProductForm;
