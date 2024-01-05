import React from 'react'
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="grid grid-flow-col px-8 py-3 shadow-xl ">
      <div className="col-span-1 flex gap-5 items-center">
        <div>
          <RxHamburgerMenu className="text-2xl" />
        </div>
        <img
          className="w-24"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>
      <div className="col-span-10 w-full flex justify-center ">
        <input
          type="text"
          className="w-1/2 border p-[5px] outline-none indent-9 text-xl align-middle border-gray-400 border-r-0 rounded-l-full"
          name=""
          id=""
        />
        <button className="py-2 px-6 border shadow-xl rounded-r-full bg-gray-300 border-gray-400">
          <GoSearch />
        </button>
      </div>
      <div className="col-span-1 my-auto">
        <FaUserCircle className="text-3xl" />
      </div>
    </div>
  );
}

export default Header
