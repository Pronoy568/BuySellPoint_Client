import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "./ProductCard";

const CategoryProduct = () => {
  const [sportsCategory, setSportsCategory] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [electronicsCategory, setElectronicsCategory] = useState([]);

  const url = `https://buy-sell-point-server.vercel.app/product`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const SportsProducts = data.filter(
          (product) => product.category === "Sports"
        );
        const FoodProducts = data.filter(
          (product) => product.category === "Food"
        );
        const ElectronicsProducts = data.filter(
          (product) => product.category === "Electronics"
        );
        setSportsCategory(SportsProducts);
        setFoodCategory(FoodProducts);
        setElectronicsCategory(ElectronicsProducts);
      });
  }, [url]);

  return (
    <section className="w-5/6 mx-auto text-center my-10">
      <h1 className="mb-10 text-5xl font-bold underline text-gray-600 decoration-gray-200 decoration-wavy underline-offset-8">
        Product By Category
      </h1>
      <Tabs className="border-2 rounded-xl">
        <TabList className="border-2 rounded-xl">
          <div className="text-xl font-medium bg-slate-100 rounded-xl">
            <Tab>Sports</Tab>
            <Tab>Food</Tab>
            <Tab>Electronics</Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-3 grid-cols-1">
              {sportsCategory.map((sports) => (
                <ProductCard
                  key={sports._id}
                  ProductCard={sports}
                ></ProductCard>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-3 grid-cols-1">
              {foodCategory.map((food) => (
                <ProductCard key={food._id} ProductCard={food}></ProductCard>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-3 grid-cols-1">
              {electronicsCategory.map((electronics) => (
                <ProductCard
                  key={electronics._id}
                  ProductCard={electronics}
                ></ProductCard>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default CategoryProduct;
