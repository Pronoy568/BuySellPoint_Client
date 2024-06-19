import {
  FaArrowAltCircleLeft,
  FaCalendarAlt,
  FaHome,
  FaUser,
  FaWallet,
  FaHourglassStart,
} from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { HiCash } from "react-icons/hi";
import { RiFileAddFill, RiLuggageCartLine } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="m-3">
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <FaArrowAltCircleLeft />
          </label>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#f0f0f0]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItem">
                  <RiLuggageCartLine /> Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">
                  <FaUser></FaUser> Manage User
                </NavLink>
              </li>
            </>
          ) : isSeller ? (
            <>
              <li>
                <NavLink to="/dashboard/sellerHome">
                  <FaHome></FaHome> Seller Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <RiFileAddFill></RiFileAddFill> Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myItem">
                  <FcManager></FcManager> My item
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selectedClass">
                  <FaCalendarAlt></FaCalendarAlt> Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledClass">
                  <FaHourglassStart></FaHourglassStart> Enrolled Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <HiCash></HiCash> Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/items">
              <MdOutlineProductionQuantityLimits />
              All Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/Sports">
              <FaWallet></FaWallet> Order Item
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut} className="rounded">
              <AiOutlineLogout></AiOutlineLogout> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
