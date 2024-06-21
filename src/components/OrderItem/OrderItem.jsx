/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useCart from "../../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OrderItem = ({ item }) => {
  const { _id, ProductName, price, details, image } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        ItemId: _id,
        ProductName,
        image,
        price,
        email: user.email,
      };
      fetch("https://buy-sell-point-server.vercel.app/selectedProduct", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-full md:w-80 bg-base-100 shadow-md m-3 flex flex-col">
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <img src={image} alt="image" className="object-cover h-full w-full" />
      </div>
      <div className="card-body flex flex-col items-center p-2">
        <h2 className="card-title text-lg  font-bold">{ProductName}</h2>
        <p className="text-sm text-gray-600">{details}</p>
        <p className="text-lg font-semibold text-orange-500">Price: ${price}</p>
        <div className="card-actions justify-end w-full">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-500 mt-4 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
