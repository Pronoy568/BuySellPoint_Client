/* eslint-disable react/prop-types */

const OrderItem = ({ item }) => {
  const { ProductName, price, details, image } = item;
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
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-500 mt-4 w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
