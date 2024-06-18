import About from "../About/About";
import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";
import ElectronicsFamous from "../Famous/Electronics";
import FoodFamous from "../Famous/FoodFamous";
import SportsFamous from "../Famous/SportsFamous";
import Featured from "../Featured/Featured";
import HoldBg from "../HoldBg/HoldBg";
import PopularItem from "../PopularItem/PopularItem";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <FoodFamous />
        <SportsFamous />
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
