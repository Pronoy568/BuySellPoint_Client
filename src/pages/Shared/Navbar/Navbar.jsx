import { NavLink } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useSeller from "../../../hooks/useSeller";
import unknown from "../../../assets/unknown/unknown.jpg";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();

  const navOptions = (
    <>
      <li>
        <NavLink exact to="/" activeClassName="text-blue-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/items" activeClassName="text-blue-500">
          All Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/order/Sports" activeClassName="text-blue-500">
          Order Item
        </NavLink>
      </li>
      <li>
        <NavLink
          to={
            isAdmin
              ? "/dashboard/adminHome"
              : isSeller
              ? "/dashboard/sellerHome"
              : "/dashboard/userHome"
          }
          activeClassName="text-blue-500"
        >
          Dashboard
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <NavLink
            to={
              isAdmin
                ? "/dashboard/adminHome"
                : isSeller
                ? "/dashboard/sellerHome"
                : "/dashboard/userHome"
            }
            className="mx-5"
            activeClassName="text-blue-500"
          >
            {user?.photoURL ? (
              <>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    className="w-10 rounded-xl"
                    src={user?.photoURL}
                    alt={user?.email}
                  />
                </div>
              </>
            ) : (
              <>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    className="w-10 rounded-xl"
                    src={unknown}
                    alt={user?.email}
                  />
                </div>
              </>
            )}
          </NavLink>

          <li>
            <button onClick={handleLogOut} className="rounded">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login" activeClassName="text-blue-500">
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10  bg-black text-white">
        <div className="navbar-start text-black">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-square lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <NavLink exact to="/" className="text-white text-xl">
            <img src="https://i.ibb.co/F5Fqj8Q/logo7.jpg" alt="logo" />
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
