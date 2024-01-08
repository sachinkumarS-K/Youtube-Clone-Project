import React, { useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {setSearchOpen, toggleSideBar} from "../redux/slices/appSlice"
import { useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from 'axios';
import { youtubeSearchApi } from '../utils/constants';
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [searchQuery , setSeacrchQuery] = useState("")
  const [suggestion , setSuggestion] = useState([])
  useEffect(() => {

    const timerId = setTimeout(getSearchSuggestion, 200);

    return () => {
      clearTimeout(timerId)
    }
  }, [searchQuery]);

  async function getSearchSuggestion() {
    //console.log(searchQuery)
    const res = await axios.get(youtubeSearchApi + searchQuery);
    setSuggestion(res.data[1])
  }
   const isSearchOpen = useSelector((state) => state.app.isSearchOpen);
 
  return (
    <div className="fixed top-0 w-full z-10">
      <div className="grid grid-flow-col h-[10vh] bg-white px-3  lg:px-8 py-3  ">
        <div className="lg:col-span-1 col-span-2 flex gap-2 lg:gap-5 items-center">
          <div onClick={() => dispatch(toggleSideBar())}>
            <RxHamburgerMenu className="lg:text-2xl text-xl" />
          </div>
          <img
            onClick={() => navigate("/")}
            className="lg:w-24 w-16" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </div>

        <div className="lg:col-span-10 col-span-10 w-full flex lg:justify-center justify-end ">
          <input
            type="text"
            className="lg:w-1/2 w-[60%] border lg:h-[83%] h-[60%] my-auto outline-none indent-9 text-xl  border-gray-400 border-r-0 rounded-l-full"
            onChange={(e) => setSeacrchQuery(e.target.value)}
            value={searchQuery}
            //onBlur={() => dispatch(setSearchOpen(false))}
            onFocus={() => dispatch(setSearchOpen(true))}
          />
          {isSearchOpen && suggestion.length > 1 && (
            <div className="absolute flex flex-col gap-2 justify-start  py-3 px-9 z-20 shadow-xl rounded-xl w-[40%] top-14 bg-gray-50">
              {suggestion.map((d) => (
                <div className='flex gap-4 items-center'>
                  <FaMagnifyingGlass className='text-gray-500 text-xl' />
                  <p className='text-xl font-semibold'> {d} </p>
                </div>
              ))}
            </div>
          )}

          <button className="py-1 lg:px-6 px-4 lg:h-[83%] h-[60%] my-auto border shadow-xl rounded-r-full bg-gray-300 border-gray-400">
            <GoSearch />
          </button>
        </div>
        <div className="col-span-1 place-self-end hidden lg:block cursor-pointer my-auto">
          <FaUserCircle className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

 ;

export default Header
