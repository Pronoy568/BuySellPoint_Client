import useAuth from "../../../hooks/useAuth";
import Profile from "../../../pages/Shared/Profile/Profile";

const SellerHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Profile user={user}></Profile>
    </div>
  );
};

export default SellerHome;
