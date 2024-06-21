import { useEffect, useState } from "react";
import AllProductDataShow from "./AllProductDataShow";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [messageRightProduct, setMessageRightProduct] = useState("");

  const url = `https://buy-sell-point-server.vercel.app/product`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const limitProduct = ProductSplit(data, 20)[0];
        const filteredProducts = limitProduct.filter((product) =>
          product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredProducts.length == 0) {
          setMessageRightProduct("Not found any Product this Name");
        } else {
          setMessageRightProduct("");
        }
        setAllProducts(filteredProducts);
      });
  }, [url, searchTerm]);

  // Function to split the product
  function ProductSplit(array, productSplitSize) {
    const productSplit = [];
    for (let i = 0; i < array.length; i += productSplitSize) {
      const chunk = array.slice(i, i + productSplitSize);
      productSplit.push(chunk);
    }
    return productSplit;
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="pb-5 pt-20 md:pt-28 w-10/12 mx-auto">
      <div>
        <SectionTitle heading="Here All Products"></SectionTitle>
      </div>
      {/* Search field */}
      <div className="text-center mb-5">
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by product name"
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>ProductName</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Details Info.</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {allProducts?.map((allProduct) => (
              <AllProductDataShow
                key={allProduct._id}
                allProduct={allProduct}
              ></AllProductDataShow>
            ))}
          </tbody>
        </table>
        {messageRightProduct && (
          <p className="text-center text-xl my-10 text-orange-700">
            {messageRightProduct}
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
