import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllProductDataShow = ({ allProduct }) => {
  const { _id, ProductName, price, category, quantity, image } = allProduct;

  return (
    <tr className="border-4 border-gray-200 border-double">
      <td>
        <div className="flex items-center justify-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={ProductName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{ProductName}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-active btn-ghost">
          <Link to={`/product/${_id}`}>View details</Link>
        </button>
      </td>
    </tr>
  );
};

export default AllProductDataShow;
