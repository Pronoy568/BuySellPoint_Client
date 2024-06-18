import { useEffect } from "react";
import img1 from "../../../assets/Sports/SP1.jpg";
import img2 from "../../../assets/Food/food1.jpg";
import img3 from "../../../assets/Electronics/electronics1.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Types = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const puzzleTypes = [
    { img: img1, text: "Sports" },
    { img: img2, text: "Food" },
    { img: img3, text: "Electronics" },
  ];

  return (
    <div className="py-10 w-10/12 mx-auto">
      <div className="text-center">
        <h1 className="md:text-5xl text-4xl mb-3 font-bold">
          Types of Product
        </h1>
        <p className="text-slate-500 md:text-base text-sm">
          your ultimate marketplace for buying and selling goods online.
          Discover a wide <br /> range of products from electronics to fashion,
          all at competitive prices.
        </p>
      </div>

      <div className="grid md:grid-cols-3 md:gap-4 gap-0 grid-cols-1 text-center mt-5">
        {puzzleTypes.map(({ img, text }, i) => (
          <div
            key={i}
            data-aos={["fade-right", "flip-down", "fade-zoom-in"][i]}
            data-aos-easing="ease-in-sine"
            className="justify-self-center border-4 rounded md:mx-2 md:mt-0 mt-3 bg-base-200 w-full"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={img}
                alt="image"
                className="object-cover h-full w-full"
              />
            </div>
            <h1 className="text-2xl pb-2 py-2">{text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;
