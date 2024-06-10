import { useParams } from "react-router-dom";

function Product() {
  const { product } = useParams();

  return <h1 className="text-4xl">Product {product}</h1>;
}

export default Product;
