// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full absolute z-[100]">
      <Link to={"/"}>
        {" "}
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to={"signUp"}>
          <button className="text-white pr-4">SignUp</button>
        </Link>
        <Link to={"logIn"}>
          <button className="bg-red-600 px-4 py-2 rounded text-white">
            SignIn
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
