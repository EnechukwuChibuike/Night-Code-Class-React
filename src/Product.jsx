import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const api = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);

      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, []);
  return (
    <section className="flex justify-center items-center ">
      <figure className="flex flex-col justify-center px-5 items-center h-[80vh] w-1/2 shadow-lg">
        <img src={data.image} alt="data's image" className="w-full h-1/2" />
        <figcaption>
          <span>{data.title}</span>
          <br />
          <strong>Price: ${data.price}</strong>
          <br />
          <span>{data.description}</span>
        </figcaption>
      </figure>
    </section>
  );
}

export default Product;
