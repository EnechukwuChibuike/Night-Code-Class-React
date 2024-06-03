import { useEffect, useState } from "react";
import Slider1 from "./assets/images/man.jpg";
import Slider2 from "./assets/images/city.jpg";
import Slider3 from "./assets/images/nature.jpg";
import Slider4 from "./assets/images/portrait.jpg";

function Slider() {
  const images = [Slider1, Slider2, Slider3, Slider4];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // cleanup function
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex w-screen justify-center items-center">
      <section className="w-1/2 h-[90vh] overflow-hidden">
        <section
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="slider"
              className="w-full h-full"
            />
          ))}
        </section>
      </section>
    </main>
  );
}

export default Slider;
