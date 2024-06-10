import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <section className="">
      <h1 className="4xl">Products</h1>

      <section className="space-x-3">
        <Link to="/products/1">Product 1</Link>
        <Link to="/products/2">Product 2</Link>
        <Link to="/products/3">Product 3</Link>
        <Link to="/products/4">Product 4</Link>
      </section>

      <Outlet />
    </section>
  );
}

export default Products;
