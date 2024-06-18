import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import image1 from "../../../assets/Food/food1.jpg";
import image2 from "../../../assets/Food/food2.jpg";
import image3 from "../../../assets/Food/food3.jpg";

const FoodFamous = () => {
  return (
    <main className="pb-5 w-11/12 mx-auto">
      <div>
        <SectionTitle heading="Food Item"></SectionTitle>
      </div>
      <section className="flex justify-center items-center">
        <div className="p-5 grid md:grid-cols-3 grid-cols-1 gap-12">
          <div className="w-80 bg-base-200 shadow-xl rounded-xl">
            <figure>
              <img
                className="w-[400px] h-[230px] rounded-xl"
                src={image1}
                alt="image1"
              />
            </figure>
            <div className="py-4 px-3 text-center">
              <h2 className="text-2xl font-semibold">Burger</h2>
            </div>
          </div>
          <div className="w-80 bg-base-200 shadow-xl rounded-xl">
            <figure>
              <img
                className="w-[400px] h-[230px] rounded-xl"
                src={image2}
                alt="image2"
              />
            </figure>
            <div className="py-4 px-3 text-center">
              <h2 className="text-2xl font-semibold">Fruit</h2>
            </div>
          </div>
          <div className="w-80 bg-base-200 shadow-xl rounded-xl">
            <figure>
              <img
                className="w-[400px] h-[230px] rounded-xl"
                src={image3}
                alt="image3"
              />
            </figure>
            <div className="py-4 px-3 text-center">
              <h2 className="text-2xl font-semibold">Vegetable</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FoodFamous;
