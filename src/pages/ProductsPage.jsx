import styled from "styled-components";
import ProductCardContainer from "../features/products/ProductCardContainer";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-around;
  padding: 5rem;
`;

function ProductsPage() {
  return (
    <Container>
      <ProductCardContainer />
    </Container>
  );
}

export default ProductsPage;
