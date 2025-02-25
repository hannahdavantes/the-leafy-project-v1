import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ProductRow from "./ProductRow";
import { useProducts } from "./useProducts";

function ProductTable() {
  const { isLoading, data: products } = useProducts();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
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
