import React, { useEffect, useState } from "react";
import { useLoginMutation } from "@redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setToken, getUserInfo } from "@redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

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
      navigate("/dashboard");
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
      <h1 className="text-black font-medium text-2xl mb-3">Login page!</h1>
      <form
        action=""
        onSubmit={handleDataSubmit}
        className="flex flex-col gap-1"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-slate-600 py-3 px-7 border"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          className="bg-slate-600 py-3 px-7 border"
          placeholder="Enter your password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="bg-secondary py-3 px-7 border">Login</button>
        <small className="text-black font-medium text-sm mb-3">
          Don't have an account? <Link to="/signup">Registration</Link>
        </small>
      </form>
    </div>
  );
}
