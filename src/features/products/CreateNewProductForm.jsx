import { useForm } from "react-hook-form";

function CreateNewProductForm() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {}
  return <form onSubmit={handleSubmit(onSubmit)}></form>;
}

export default CreateNewProductForm;
