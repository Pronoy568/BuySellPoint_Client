import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SingleProduct = () => {
  const ProductData = useLoaderData();
  const {
    sellerName,
    sellerEmail,
    ProductName,
    price,
    category,
    quantity,
    rating,
    available,
    image,
    details,
  } = ProductData;

  return (
    <div className="pt-20 pb-10 lg:pt-28 lg:pb-20 w-full lg:w-10/12 mx-auto">
      <div className="pb-10">
        <h1 className="text-center text-4xl lg:text-5xl mb-5 italic font-semibold">
          <span className="text-gray-500 underline decoration-base-300 decoration-wavy underline-offset-8">
            Details Information of
          </span>{" "}
          <span className="text-blue-900 underline decoration-sky-200 decoration-wavy underline-offset-8">
            {ProductName}
          </span>
        </h1>
      </div>
      <div className="flex w-11/12 mx-auto flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
        <div className="md:w-1/2">
          <img
            className="rounded-3xl w-full h-80 md:h-auto"
            src={image}
            alt={ProductName}
          />
        </div>
        <div className="text-xl md:text-2xl space-y-2 bg-gray-100 p-6 rounded-xl w-full md:w-1/2">
          <h1>
            <span className="font-medium text-blue-900">ProductName:</span>{" "}
            <span className="text-gray-600">{ProductName}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">SellerName:</span>{" "}
            <span className="text-gray-600">{sellerName}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">SellerEmail:</span>{" "}
            <span className="text-gray-600">{sellerEmail}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">Category:</span>{" "}
            <span className="text-gray-600">{category}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">Price:</span>{" "}
            <span className="text-gray-600">{price}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">Quantity:</span>{" "}
            <span className="text-gray-600">{quantity}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">Available:</span>{" "}
            <span className="text-gray-600">{available}</span>
          </h1>
          <div className="text-sm">
            <div className="tooltip tooltip-right" data-tip={rating}>
              <Rating
                initialRating={rating}
                readonly
                emptySymbol={
                  <i className="far fa-star fa-2x text-gray-600"></i>
                }
                fullSymbol={
                  <i className="fas fa-star fa-2x text-yellow-500"></i>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-2/4 mx-auto">
        <label
          htmlFor="my-modal"
          className="btn btn-block btn-active btn-ghost"
        >
          Details
        </label>
      </div>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-center p-4">
          <h1 className="text-3xl font-bold mb-3">{ProductName}</h1>
          <h1 className="text-justify">{details}</h1>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Done
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
