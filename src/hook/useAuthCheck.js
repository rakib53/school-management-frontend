import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUserInfoQuery } from "@redux/features/auth/authApi";
import { getUserInfo } from "@redux/features/auth/authSlice";

const useAuthCheck = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.authSlice);
  const {
    data: userData,
    isLoading,
    isError,
  } = useGetUserInfoQuery(undefined, { skip: !token });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading && !isError && userData?.user?._id) {
      dispatch(getUserInfo(userData?.user));
      setIsAuth(true);
    }
    if (isError || !token) {
      navigate("/signin");
      setIsAuth(true);
    }
  }, [isError, isLoading, token]);

  return isAuth;
};

export default useAuthCheck;
