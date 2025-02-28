import { useProduct } from "./useProduct";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import { formatCurrency } from "../../utils/formatters";
import styled from "styled-components";
import Button from "../../ui/Button";

const StyledProductDetail = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  width: 50%;
  padding: 2.4rem;

  border: 0.5rem solid var(--color-primary-10);
  border-radius: 0.8rem;
  box-shadow: 0.65rem 0.65rem 0 var(--color-primary-7);
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const Description = styled.p`
  text-align: justify;
  text-justify: inter-word;
`;

const CareInstructions = styled.div`
  display: flex;
  flex-direction: column;
`;

function ProductDetail() {
  const { data, isLoading, error } = useProduct();
  if (isLoading) return <Spinner />;

  if (!data) return <Heading as="h1">Cannot load products...</Heading>;

  if (error) return <Heading as="h1">{error.message}</Heading>;

  const {
    product_name,
    image,
    description,
    product_variations,
    care_instructions,
  } = data;

  console.log(data);

  return (
    <StyledProductDetail>
      <Img src={image} alt={`Image of ${product_name}`} />
      <Details>
        <Heading as="h1">{product_name}</Heading>
        <Description>{description}</Description>
        <ul>
          {product_variations.map(({ size_value, size_unit, price }) => (
            <li
              key={size_value}
            >{`${size_value}${size_unit} ➡️ ${formatCurrency(price)}`}</li>
          ))}
        </ul>
        {care_instructions.length > 0 && (
          <CareInstructions>
            <Heading as="h5">Care Instructions</Heading>
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
                      <li>☀️ {sun_exposure}</li>
                      <li>💧 {when_to_water}</li>
                      <li>☁️ {humidity_level} Humidity</li>
                    </ul>
                  </li>
                )
              )}
            </ul>
          </CareInstructions>
        )}
        <Button size="medium">Add to Cart</Button>
      </Details>
    </StyledProductDetail>
  );
}

export default ProductDetail;
