import { useQuery } from "@tanstack/react-query";
import { FaUserAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://buy-sell-point-server.vercel.app/users");
      return res.json();
    },
  });

  const handleMakeSeller = (user) => {
    fetch(`https://buy-sell-point-server.vercel.app/users/seller/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is now a Seller successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeAdmin = (user) => {
    fetch(`https://buy-sell-point-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is now an Admin successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Seller</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-600 text-white"
                      disabled={user.role === "seller"}
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "seller" ? (
                    "Seller"
                  ) : (
                    <button
                      onClick={() => handleMakeSeller(user)}
                      className="btn btn-ghost bg-green-600 text-white"
                      disabled={user.role === "admin"}
                    >
                      <FaUserAlt />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
