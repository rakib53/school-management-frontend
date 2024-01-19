import React, { useEffect, useState } from "react";
import { useRegistrationMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
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
      navigate("/");
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
      <h1>Registration page!</h1>
      <form action="" onSubmit={handleSubmitData}>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <br />
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
        <button>Registration</button>
      </form>
    </div>
  );
}
