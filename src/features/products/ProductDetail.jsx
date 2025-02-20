import { useProduct } from "./useProduct";

function ProductDetail() {
  const { data, isLoading, error } = useProduct();
  console.log(data);
  return <div>Product Detail Component</div>;
}

export default ProductDetail;
