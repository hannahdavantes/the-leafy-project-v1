import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateNewProductForm from "./CreateNewProductForm";
function CreateProduct() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button size="large">Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateNewProductForm />
      </Modal.Window>
    </Modal>
  );
}

export default CreateProduct;
