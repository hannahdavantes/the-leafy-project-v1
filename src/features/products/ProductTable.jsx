import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ProductRow from "./ProductRow";
import { useProductsDetailed } from "./useProductsDetailed";

function ProductTable() {
  const { isLoading, data: products } = useProductsDetailed();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="1fr 1fr 1fr 1fr">
      <Table.Header>
        <div>Name</div>
        <div>Description</div>
        <div>Category</div>
      </Table.Header>
      <Table.Body
        data={products}
        render={(product) => (
          <ProductRow product={product} key={product.product_id} />
        )}
      />
    </Table>
  );
}

export default ProductTable;
