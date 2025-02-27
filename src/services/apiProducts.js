import supabase, { supabaseUrl } from "./supabase";

export async function getProductsCompact() {
  const { data, error } = await supabase
    .from("products")
    .select(
      "product_id, product_name, image,  product_variations(product_id, price)"
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
  console.log(product);
  const imageName = `${Math.random()}-${product.image?.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/products/${imageName}`;

  const { data, error } = await supabase
    .from("products")
    .insert([{ ...product, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Can't add new product");
  }

  const { error: storageError } = await supabase.storage
    .from("products")
    .upload(imageName, product.image);

  if (storageError) {
    await supabase.from("products").delete().eq("product_id", data.product_id);
    console.error(storageError);
    throw new Error("Cannot upload photo. New product wasn't added");
  }

  return data;
  // return null;
}
