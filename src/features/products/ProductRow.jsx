import Table from "../../ui/Table";
import TableRowActions from "../../ui/TableRowActions";

import { formatCurrency } from "../../utils/formatters";

function ProductRow({ product }) {
  const {
    id: productId,
    product_name,
    description,
    categories,
    product_variations,
  } = product;

  return (
    <Table.Row key={productId}>
      <div>{product_name}</div>
      <div>{categories?.category_name}</div>
      <div>
        {product_variations?.length > 0 ? (
          product_variations.map((variation) => (
            <div key={variation.product_variation_id}>
              {`${formatCurrency(variation.price)} (${variation.size_value}${
                variation.size_unit
              })`}
            </div>
          ))
        ) : (
          <div>N/A</div>
        )}
      </div>
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
