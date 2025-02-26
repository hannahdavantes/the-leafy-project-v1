import Table from "../../ui/Table";
import TableRowActions from "../../ui/TableRowActions";

function ProductRow({ product }) {
  const { id: productId, product_name, description, categories } = product;

  return (
    <Table.Row key={productId}>
      <div>{product_name}</div>
      <div>{categories?.category_name}</div>
      <p>{description}</p>
      <TableRowActions />
    </Table.Row>

    // <tr>
    //   <td>{product_name}</td>
    //   <td>{description}</td>
    //   <td>{categories?.category_name}</td>
    // </tr>
  );
}

export default ProductRow;
