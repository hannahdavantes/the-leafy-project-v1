import { useQuery } from "@tanstack/react-query";
import { getSubCategories } from "../../services/apiCategories";

export function useSubCategories(parentCategoryId) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["parent_categories", "sub_categories", parentCategoryId],
    queryFn: () => getSubCategories(parentCategoryId),
  });

  return { isLoading, data, error };
}
