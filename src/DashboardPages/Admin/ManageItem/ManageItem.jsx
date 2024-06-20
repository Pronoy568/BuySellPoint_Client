import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useProduct from "../../../hooks/useProduct";

const ManageItem = () => {
  const [product] = useProduct();
  return (
    <div className="w-10/12 mx-auto my-10">
      <SectionTitle heading={"Manage Item"}></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Price</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    <p>{item.ProductName}</p>
                  </div>
                </td>
                <td>{item.sellerName}</td>
                <td>{item?.sellerEmail}</td>
                <td>${item.price}</td>
                <td>{item.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
