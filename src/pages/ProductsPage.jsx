import styled from "styled-components";
import ProductCard from "../ui/ProductCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
  padding: 5rem;
`;

function ProductsPage() {
  return (
    <>
      <h1>PRODUCTS PAGE</h1>
      <Container>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
    </>
  );
}

export default ProductsPage;
