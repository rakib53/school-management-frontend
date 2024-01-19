import React, { useEffect, useState } from "react";
import { useLoginMutation } from "@redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setToken, getUserInfo } from "@redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: " ",
  });
  const [signInError, setSignInError] = useState({
    isError: false,
    errorMessage: "",
  });
  const [loginUser, { data: signInResponse, isLoading, isError }] =
    useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDataSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
  };

  useEffect(() => {
    if (!isLoading && signInResponse?.token) {
      dispatch(setToken(signInResponse.token));
      dispatch(getUserInfo(signInResponse?.user));
      navigate("/");
    }
    if (!isLoading && isError) {
      setSignInError({
        isError: true,
        errorMessage: "An error occurred during sign in!",
      });
    }
  }, [signInResponse, isLoading, isError]);

  return (
    <div>
      <h1>Login page!</h1>
      <form action="" onSubmit={handleDataSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
