import React from 'react'
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {toggleSideBar} from "../redux/slices/appSlice"
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className="grid fixed top-0 w-full z-10 grid-flow-col h-[10vh] bg-white  px-8 py-3  ">
      <div className="col-span-1 flex gap-5 items-center">
        <div onClick={() => dispatch(toggleSideBar())}>
          <RxHamburgerMenu className="text-2xl" />
        </div>
        <img
          onClick={()=> navigate("/")}
          className="w-24"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>
      <div className="col-span-10 w-full flex justify-center ">
        <input
          type="text"
          className="w-1/2 border h-[83%] my-auto outline-none indent-9 text-xl  border-gray-400 border-r-0 rounded-l-full"
          name=""
          id=""
        />
        <button className="py-1 px-6 h-[83%] my-auto border shadow-xl rounded-r-full bg-gray-300 border-gray-400">
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
