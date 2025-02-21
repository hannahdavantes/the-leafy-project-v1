import { useQuery } from "@tanstack/react-query";
import { getParentCategories } from "../../services/apiCategories";

export function useParentCategories() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getParentCategories,
  });

  return { isLoading, data, error };
}
