import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthProtected = ({ children }) => {
  const location = useLocation();
  const state = useSelector((state) => state.authSlice);

  const { user, token } = state || {};
  console.log(state);

  return !user && !token ? (
    <Navigate to={{ pathname: "/signin", state: { from: location } }} />
  ) : (
    children
  );
};

export default AuthProtected;
