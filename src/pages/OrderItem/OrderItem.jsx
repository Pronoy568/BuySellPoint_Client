import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router";
import useProduct from "../../hooks/useProduct";
import OrderTab from "./OrderTab";

const OrderItem = () => {
  const categories = ["Sports", "Food", "Electronics"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [product] = useProduct();

  const Sports = product.filter((item) => item.category === "Sports");
  const Food = product.filter((item) => item.category === "Food");
  const Electronics = product.filter((item) => item.category === "Electronics");

  return (
    <div>
      <div className="pt-28 text-center max-w-screen-xl mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Sports</Tab>
            <Tab>Food</Tab>
            <Tab>Soup</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={Sports}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={Food}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={Electronics}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderItem;
