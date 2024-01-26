import React, { useEffect, useState } from "react";
import { useRegistrationMutation } from "@redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, getUserInfo } from "@redux/features/auth/authSlice";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: " ",
  });
  const [registrationError, setRegistrationError] = useState({
    isError: false,
    errorMessage: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerNewUser, { data: registrationResponse, isLoading, isError }] =
    useRegistrationMutation();

  // sending data to the server
  const handleSubmitData = (event) => {
    event.preventDefault();
    if (user?.password?.length >= 6) {
      registerNewUser(user);
    }
  };

  useEffect(() => {
    if (!isLoading && registrationResponse?.token) {
      dispatch(setToken(registrationResponse.token));
      dispatch(getUserInfo(registrationResponse?.user));
      navigate("/dashboard");
    }
    if (!isLoading && isError) {
      setRegistrationError({
        isError: true,
        errorMessage: "An error occurred during sign in!",
      });
    }
  }, [registrationResponse?.token, isLoading]);

  return (
    <div>
      <h1 className="text-black font-medium text-2xl mb-3">
        Registration page!
      </h1>
      <form
        action=""
        onSubmit={handleSubmitData}
        className="flex flex-col gap-1"
      >
        <input
          type="text"
          placeholder="Enter your username"
          className="bg-slate-600 py-3 px-7 border"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-slate-600 py-3 px-7 border"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="bg-slate-600 py-3 px-7 border"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="bg-secondary py-3 px-7 border">Registration</button>

        <small className="text-black font-medium text-sm mb-3">
          Already have an account? <Link to="/signin">Signin</Link>
        </small>
      </form>
    </div>
  );
}
