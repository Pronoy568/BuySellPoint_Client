import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItem = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddItem = (event) => {
    event.preventDefault();

    const form = event.target;

    const ProductName = form.name.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const price = parseInt(form.price.value);
    const category = form.category.value;
    const sellerName = user.displayName;
    const rating = parseInt(form.rating.value);
    const details = form.image.value;
    const available = parseInt(form.available.value);

    const newItem = {
      sellerName,
      sellerEmail: user?.email,
      ProductName,
      price,
      category,
      quantity,
      rating,
      available,
      image,
      details,
    };
    // send data to the server
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added Successfully Done",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/dashboard/myItem", { state: { from: location } });
        }
      });
  };

  return (
    <div className="bg-[#f9f7f77f] px-14 py-8 text-center">
      <div className="-mt-8">
        <SectionTitle heading="Add Item"></SectionTitle>
      </div>
      <form onSubmit={handleAddItem}>
        {/* Form Item name and image */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Item Image"
                name="image"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* Form Seller name and email */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                value={user?.displayName}
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                value={user?.email}
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
        </div>
        {/* Form Available items and category */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">-- Select Category --</option>
              <option value="Sports">Sports</option>
              <option value="Food">Food</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>
        </div>
        {/* Form Rating and details */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* Form Available & Price */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Available</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Available"
                name="available"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-block" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
