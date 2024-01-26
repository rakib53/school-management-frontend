import React from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "@assets/images/user.jpg";
import { logut } from "@redux/features/auth/authSlice";

export default function Navbar() {
  const state = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const { user } = state || {};

  const handleLogut = () => {
    dispatch(logut());
  };

  return (
    <div
      className="w-full bg-whiteBg py-5 px-4"
      style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px" }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-black font-medium text-1xl">Good morning!</h3>
          <p className="text-black font-medium text-sm">
            {user?.userName || "student name"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] overflow-hidden">
            <img
              src={User}
              className="w-full h-full rounded-full object-cover"
              alt=""
            />
          </div>
          <span className="cursor-pointer" onClick={handleLogut}>
            <svg
              stroke="currentColor"
              fill="#000000"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z"></path>
              <path d="M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
