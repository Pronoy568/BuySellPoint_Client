import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <p>Navbar</p>
      <Outlet></Outlet>
      <p>Footer</p>
    </div>
  );
};

export default Main;
