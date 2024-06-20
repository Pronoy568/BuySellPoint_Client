import useAuth from "../../../hooks/useAuth";
import useProduct from "../../../hooks/useProduct";

const MyItem = () => {
  const { user } = useAuth();
  const [allItem] = useProduct();

  // Filter the allItem array based on email
  const filteredItems = allItem.filter(
    (Item) => Item?.sellerEmail === user.email
  );

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
          <h3 className="text-3xl text-center">
            My Item: {filteredItems.length}
          </h3>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((Item, index) => (
                <tr key={Item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={Item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                      <p>{Item.ProductName}</p>
                    </div>
                  </td>
                  <td>${Item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
