import { useState } from "react";
import supabase, { supabaseUrl } from "../services/supabase";

import Button from "../ui/Button";

import {
  parent_categories,
  plant_categories,
  planter_categories,
  plant_maintenance_categories,
} from "./sample-categories-data";

import { products } from "./sample-product-data";

async function deleteProductVariations() {
  const { error } = await supabase
    .from("product_variations")
    .delete()
    .gt("product_variation_id", 0);
  if (error) console.log(error.message);
}

async function deleteCareInstructions() {
  const { error } = await supabase
    .from("care_instructions")
    .delete()
    .gt("care_instructions_id", 0);
  if (error) console.log(error.message);
}

async function deleteProducts() {
  const { error } = await supabase
    .from("products")
    .delete()
    .gt("product_id", 0);
  if (error) console.log(error.message);
}

async function deleteCategories() {
  const { error } = await supabase
    .from("categories")
    .delete()
    .gt("category_id", 0);
  if (error) console.log(error.message);
}

function getCategoryId(categories, categoryName) {
  const category = categories.filter(
    (item) => item.category_name === categoryName
  );

  return category.at(0).category_id;
}

async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error(error);
  }

  return data;
}

async function createCategories() {
  const { data: parentCategories, error: parentError } = await supabase
    .from("categories")
    .insert(parent_categories)
    .select();
  if (parentError) console.log(parentError.message);

  const plantCategoryId = getCategoryId(parentCategories, "Plants");
  const planterCategoryId = getCategoryId(parentCategories, "Planters");
  const plantMaintenanceCategoryId = getCategoryId(
    parentCategories,
    "Plant Maintenance"
  );

  const finalPlantCategories = plant_categories.map((category) => {
    return {
      category_name: category.category_name,
      parent_category_id: plantCategoryId,
    };
  });

  const finalPlantersCategories = planter_categories.map((category) => {
    return {
      category_name: category.category_name,
      parent_category_id: planterCategoryId,
    };
  });

  const finalPlantMaintenanceCategories = plant_maintenance_categories.map(
    (category) => {
      return {
        category_name: category.category_name,
        parent_category_id: plantMaintenanceCategoryId,
      };
    }
  );

  const { data, error } = await supabase
    .from("categories")
    .insert([
      ...finalPlantCategories,
      ...finalPlantersCategories,
      ...finalPlantMaintenanceCategories,
    ])
    .select();
  if (error) console.log(parentError);

  return data;
}

async function createProducts() {
  const categories = await getCategories();
  products.map(async (product) => {
    const {
      category_name,
      product_name,
      description,
      image,
      care_instructions,
      product_variations,
    } = product;

    const { data: newProduct, error: newProductError } = await supabase
      .from("products")
      .insert({
        category_id: getCategoryId(categories, category_name),
        product_name,
        description,
        image: `${supabaseUrl}/storage/v1/object/public/products//${image}`,
        isPublished: true,
      })
      .select()
      .single();
    if (newProductError) console.log(newProductError);

    // Get product ID of the new product
    const { product_id: newProductId } = newProduct;

    // Add each variations

    if (product_variations.length > 0) {
      product_variations.map(async (prod) => {
        const { error } = await supabase.from("product_variations").insert({
          product_id: newProductId,
          ...prod,
        });
        if (error) console.log(error);
      });
    }

    if (care_instructions != undefined) {
      const { error } = await supabase.from("care_instructions").insert({
        product_id: newProductId,
        ...care_instructions,
      });
      if (error) console.log(error);
    }
  });
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);

    // Delete all data first
    await deleteProductVariations();
    await deleteCareInstructions();
    await deleteProducts();
    // await deleteCategories();

    // Upload data
    // await createCategories();
    await createProducts();
  }

  return (
    <Button
      size="large"
      variation="secondary"
      onClick={() => uploadAll()}
      disabled={isLoading}
    >
      Upload ALL
    </Button>
  );
}

export default Uploader;
