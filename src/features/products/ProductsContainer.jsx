import styled from "styled-components";

import { useProductsCompact } from "./useProductsCompact";
import { useProductsDetailed } from "./useProductsDetailed";

import ProductCard from "./ProductCard";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import ProductTable from "./ProductTable";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  padding: 5rem;
  align-items: center;
`;

function ProductsContainer() {
  const {
    data: productsCompact,
    isLoading: isLoadingCompact,
    error: errorCompact,
  } = useProductsCompact();

  if (isLoadingCompact) return <Spinner />;

  if (!productsCompact)
    return <Heading as="h1">Cannot load products...</Heading>;

  if (errorCompact) return <Heading as="h1">Something went</Heading>;

  return (
    <Container>
      {/* {productsCompact.map((product) => (
        <ProductCard product={product} key={product.product_id} />
      ))} */}
      <ProductTable />
    </Container>
  );
}

export default ProductsContainer;
