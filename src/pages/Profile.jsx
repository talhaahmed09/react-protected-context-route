import { useAuth } from "../hooks/AuthProvider";

const Profile = () => {
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <h1> Profile</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Profile;
