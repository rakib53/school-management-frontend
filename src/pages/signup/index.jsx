import React, { useEffect, useState } from "react";
import { useRegistrationMutation } from "../../redux/features/auth/authApi";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: " ",
  });
  const [registerNewUser, { data, isLoading, isError }] =
    useRegistrationMutation();

  const handleDataSubmit = (e) => {
    e.preventDefault();
    registerNewUser(user);
  };

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <h1>Registration page!</h1>
      <form action="" onSubmit={handleDataSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>Registration</button>
      </form>
    </div>
  );
}
