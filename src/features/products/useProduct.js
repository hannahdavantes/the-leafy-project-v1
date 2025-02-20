import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

export function useProduct() {
  const { productId } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  return { isLoading, data, error };
}
