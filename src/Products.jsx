import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const api = "https://fakestoreapi.com/products";

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(api)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  // async/await
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);

      const data = await response.json();

      setData(data);

      if (response.ok) {
        console.log("Data fetched successfully");
      } else {
        console.log("Cannot fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <h1 className="text-center text-4xl">Products</h1>
      <section className="flex flex-wrap justify-around gap-10 mt-10">
        {data.map((product, index) => (
          <Link to={`/products/${product.id}`}>
            <figure
              className="flex flex-col justify-center px-5 items-center min-h-60 w-60 shadow-lg"
              key={index}
            >
              <img
                src={product.image}
                alt="product's image"
                className="w-full h-1/2"
              />
              <figcaption>
                <span>{product.title}</span>
                <br />
                <strong>Price: ${product.price}</strong>
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>
    </section>
  );
}

export default Products;
