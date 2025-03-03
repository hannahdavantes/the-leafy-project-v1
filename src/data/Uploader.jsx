import { useState } from "react";
import supabase from "../services/supabase";

import Button from "../ui/Button";

import {
  parent_categories,
  plant_categories,
  planter_categories,
  plant_maintenance_categories,
} from "./sample-categories-data";

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

function getParentCategoryId(parentCategories, categoryName) {
  const plantCategory = parentCategories.filter(
    (item) => item.category_name === categoryName
  );

  return plantCategory.at(0).category_id;
}

async function createCategories() {
  const { data: parentCategories, error: parentError } = await supabase
    .from("categories")
    .insert(parent_categories)
    .select();
  if (parentError) console.log(parentError.message);

  const plantCategoryId = getParentCategoryId(parentCategories, "Plants");
  const planterCategoryId = getParentCategoryId(parentCategories, "Planters");
  const plantMaintenanceCategoryId = getParentCategoryId(
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
  console.log(data);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);

    // Delete all data first
    await deleteProductVariations();
    await deleteCareInstructions();
    await deleteProducts();
    await deleteCategories();

    // Upload data
    await createCategories();
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
