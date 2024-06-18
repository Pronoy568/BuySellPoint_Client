import featuredImg from "../../../assets/Banner/cricket1.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white md:w-11/12 w-full mx-auto pt-8 my-16">
      <div>
        <SectionTitle heading="Featured" />
      </div>
      <div className="md:flex justify-center items-center pb-20 pt-12 md:px-36 px-5">
        <div className="flex justify-center md:w-1/2 w-full">
          <img
            className="rounded md:w-auto w-full"
            src={featuredImg}
            alt="image"
          />
        </div>
        <div className="md:ml-10 md:mt-0 mt-3 md:w-1/2 w-full">
          <p className="uppercase py-2">Where can I get some?</p>
          <p className="text-justify">
            At BuySellPoint, you can find everything you need! Simply browse our
            categories, search for the items you want, and enjoy a seamless
            shopping experience. Join us today and explore endless opportunities
            to buy and sell with ease!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
