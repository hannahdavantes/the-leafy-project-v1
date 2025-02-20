import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select(
      "product_id, product_name, image_url,  product_variations(product_id, price)"
    );

  if (error) {
    console.error(error);
  }

  return data;
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*, product_variations(*), categories(*), care_instructions(*)")
    .eq("product_id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product not found");
  }

  return data;
}
