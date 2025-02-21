import styled from "styled-components";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/formatters";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  overflow: hidden;
  flex-direction: column;
  width: 28rem;
  height: 40rem;
  box-shadow: 0.65rem 0.65rem 0 var(--color-primary-7);
  border-radius: 0.8rem;
  overflow: hidden;
  border: 0.5rem solid var(--color-primary-10);
`;

const ImgContainer = styled.div`
  grid-row: 1;
  overflow: hidden;
`;

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 2;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`;

const Name = styled.span`
  color: var(--color-primary-6);
  font-family: "Roboto Mono", serif;
  font-size: 2rem;
  text-align: center;
  padding: 1.5rem;
`;

const Price = styled.span`
  display: flex;
  flex-direction: column;
  color: var(--color-primary-8);
  font-family: "Roboto Mono", serif;
  font-size: 2rem;
  text-align: center;

  span {
    color: var(--color-primary-5);
    font-size: 1.2rem;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 2rem;
`;

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { product_id, product_name, image_url, product_variations } = product;
  const { price } = product_variations.at(0);

  return (
    <Card>
      <ImgContainer>
        <Img
          src={
            image_url
              ? image_url
              : "https://fjypotkepcjgvuqhvrwb.supabase.co/storage/v1/object/public/products//default.png"
          }
        />
      </ImgContainer>
      <ProductDetailContainer>
        <Name>{product_name}</Name>
        <Price>
          {product_variations.length > 1 && <span>starting from</span>}
          {formatCurrency(price)}
        </Price>
        <ButtonGroup>
          <Button
            variation="secondary"
            onClick={() => navigate(`/products/${product_id}`)}
          >
            View Details
          </Button>
          <Button variation="primary">Add to Cart</Button>
        </ButtonGroup>
      </ProductDetailContainer>
    </Card>
  );
}

export default ProductCard;
