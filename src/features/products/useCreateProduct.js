import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct as createProductAPI } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useCreateProduct() {
  const queryClient = useQueryClient();
  const { mutate: createProduct, isLoading: isCreating } = useMutation({
    mutationFn: createProductAPI,
    onSuccess: () => {
      toast.success("New product added succesfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isCreating, createProduct };
}
