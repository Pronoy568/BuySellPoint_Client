import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <p>Footer</p>
    </div>
  );
};

export default Main;
