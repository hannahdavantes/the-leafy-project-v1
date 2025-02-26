import Table from "../../ui/Table";

function ProductRow({ product }) {
  const { id: productId, product_name, description, categories } = product;

  return (
    <Table.Row key={productId}>
      <div>{product_name}</div>
      <p>{description}</p>
      <div>{categories?.category_name}</div>
    </Table.Row>
  );
}

export default ProductRow;
