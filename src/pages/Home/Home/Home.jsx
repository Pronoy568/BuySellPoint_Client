import Banner from "../Banner/Banner";
import ElectronicsFamous from "../Famous/Electronics";
import FoodFamous from "../Famous/FoodFamous";
import SportsFamous from "../Famous/SportsFamous";
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
      </div>
    </div>
  );
};

export default Home;
