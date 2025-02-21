import supabase from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error(error);
  }

  return data;
}

export async function getParentCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .is("parent_category_id", null);

  if (error) {
    console.error(error);
  }

  return data;
}

export async function getSubCategories(parentCategoryId) {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("parent_category_id", parentCategoryId);

  if (error) {
    console.error(error);
  }

  return data;
}
