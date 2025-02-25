import styled from "styled-components";

import { useProducts } from "../products/useProducts";

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
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <Spinner />;

  if (!data) return <Heading as="h1">Cannot load products...</Heading>;

  if (error) return <Heading as="h1">{error.message}</Heading>;

  return (
    <Container>
      {/* {data.map((product) => (
        <ProductCard product={product} key={product.product_id} />
      ))} */}
      <ProductTable />
    </Container>
  );
}

export default ProductsContainer;
