import { useNavigate } from "react-router-dom";
import Table from "../../ui/Table";
import TableRowActions from "../../ui/TableRowActions";

import { formatCurrency } from "../../utils/formatters";

function ProductRow({ product }) {
  const {
    product_id,
    product_name,
    description,
    categories,
    product_variations,
  } = product;

  const navigate = useNavigate();

  function handleView() {
    console.log(product_id);
    navigate(`/products/${product_id}`);
  }

  return (
    <Table.Row key={product_id}>
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
      <TableRowActions viewHandler={handleView} />
    </Table.Row>
  );
}

export default ProductRow;
