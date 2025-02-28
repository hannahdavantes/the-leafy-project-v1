import styled from "styled-components";

import { useProductsCompact } from "./useProductsCompact";
import { useProductsDetailed } from "./useProductsDetailed";

import ProductCard from "./ProductCard";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";

const CardsContainer = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  grid-gap: 4rem;
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
    <CardsContainer>
      {productsCompact.map(
        (product) =>
          product.isPublished && (
            <ProductCard product={product} key={product.product_id} />
          )
      )}
    </CardsContainer>
  );
}

export default ProductsContainer;
