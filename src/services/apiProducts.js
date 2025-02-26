import supabase from "./supabase";

export async function getProductsCompact() {
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

export async function getProductsDetailed() {
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(*), care_instructions(*), product_variations(*)");

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

export async function createProduct({ product }) {
  console.log("API", product);
  const { data, error } = await supabase
    .from("products")
    .insert([{ ...product }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Can't add new product");
  }

  return data;
}
