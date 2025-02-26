import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ProductRow from "./ProductRow";
import Button from "../../ui/Button";

import { useProductsDetailed } from "./useProductsDetailed";
import { useNavigate } from "react-router-dom";

function ProductTable() {
  const navigate = useNavigate();

  const { isLoading, data: products } = useProductsDetailed();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Table columns="1fr 1fr 4fr 1fr">
        <Table.Header>
          <div>Name</div>
          <div>Category</div>
          <div>Description</div>
          <div>Actions</div>
        </Table.Header>
        <Table.Body
          data={products}
          render={(product) => (
            <ProductRow product={product} key={product.product_id} />
          )}
        />
      </Table>
      <Button size="large" onClick={() => navigate("/products/new")}>
        Add Products
      </Button>
    </>
  );
}

export default ProductTable;
