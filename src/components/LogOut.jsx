import { useNavigate } from "react-router-dom";
import "../styling/logOutButton.css";

export default function LogOutButton({ user }) {
  let navigate = useNavigate();
  return (
    <div id="logoutButtonContainer">
      <button
        id="logoutButton"
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
}
