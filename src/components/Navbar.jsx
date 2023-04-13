import React from "react";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
const Navbar = () => {
  return (
    <div>
      <div className="flex space-x-4 bg-white h-[74px] shadow-lg text-center items-center justify-between px-4 ">
        <Bars3BottomLeftIcon className="h-6 w-6 md:hidden" />
        <h2 className="text-3xl font-bold">udemy</h2>
        <h3 className="hidden md:block text-sm"> Categories</h3>

        <form className="hidden bg-[#f8fafb] md:flex border border-black rounded-3xl h-10 items-center ">
          <MagnifyingGlassIcon className="h-5 w-5 mx-5 text-gray-400 " />
          <input
            placeholder="Search for anything"
            type="text"
            className="bg-transparent text-sm outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
