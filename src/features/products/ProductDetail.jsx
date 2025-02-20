import { useProduct } from "./useProduct";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import { formatCurrency } from "../../utils/formatters";

function ProductDetail() {
  const { data, isLoading, error } = useProduct();
  if (isLoading) return <Spinner />;

  if (!data) return <Heading as="h1">Cannot load products...</Heading>;

  if (error) return <Heading as="h1">{error.message}</Heading>;

  console.log(data);

  const {
    product_name,
    image_url,
    description,
    product_variations,
    care_instructions,
  } = data;

  return (
    <>
      <Heading as="h1">{product_name}</Heading>
      <img src={image_url} alt={`Image of ${product_name}`} />
      <p>{description}</p>
      <ul>
        {product_variations.map(({ size_value, size_unit, price }) => (
          <li key={size_value}>{`${size_value}${size_unit} ➡️ ${formatCurrency(
            price
          )}`}</li>
        ))}
      </ul>
      <ul>
        {care_instructions.map(
          ({
            care_instructions_id,
            sun_exposure,
            when_to_water,
            humidity_level,
          }) => (
            <li key={care_instructions_id}>
              <ul>
                <li>☀️{sun_exposure}</li>
                <li>💧{when_to_water}</li>
                <li>☁️{humidity_level}</li>
              </ul>
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ProductDetail;
