import React from "react";
import { useDispatch } from "react-redux";
import { logut } from "@redux/features/auth/authSlice";

export default function Home() {
  const dispatch = useDispatch();

  const handleLogut = () => {
    dispatch(logut());
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>Home page!</h1>
      <p
        style={{ color: "red", fontWeight: 500 }}
        onClick={() => handleLogut()}
      >
        Logut!
      </p>
    </div>
  );
}
