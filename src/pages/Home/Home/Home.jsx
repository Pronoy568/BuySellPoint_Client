import About from "../About/About";
import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";
import CategoryProduct from "../CategoryProduct/CategoryProduct";
import ElectronicsFamous from "../Famous/Electronics";
import FoodFamous from "../Famous/FoodFamous";
import SportsFamous from "../Famous/SportsFamous";
import Featured from "../Featured/Featured";
import HoldBg from "../HoldBg/HoldBg";
import PopularItem from "../PopularItem/PopularItem";
import Types from "../Types/Types";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Types />
        <CategoryProduct />
        <SportsFamous />
        <FoodFamous />
        <ElectronicsFamous />
        <PopularItem />
        <HoldBg />
        <Featured />
        <About />
        <Benefit />
      </div>
    </div>
  );
};

export default Home;
