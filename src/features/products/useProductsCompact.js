import { useQuery } from "@tanstack/react-query";
import { getProductsCompact } from "../../services/apiProducts";

export function useProductsCompact() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsCompact,
  });

  return { isLoading, data, error };
}
