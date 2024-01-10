import React, { useEffect, useRef, useState } from 'react'
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {setSearchOpen, toggleSideBar} from "../redux/slices/appSlice"
import { NavLink, useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from 'axios';
import { youtubeSearchApi } from '../utils/constants';
import { chacheResults } from '../redux/slices/searchSlice';
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [searchQuery , setSeacrchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([]);
  const searchCache = useSelector(state => state.search);
  const menu = useRef(null)
  useEffect(() => {

    const timerId = setTimeout(() => {
      if (searchCache[searchQuery]) {
       setSuggestion(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timerId)
    }
  }, [searchQuery]);

  async function getSearchSuggestion() {
    //console.log(searchQuery)
    const res = await axios.get(youtubeSearchApi + searchQuery);
    setSuggestion(res.data[1]);
    dispatch(
      chacheResults({
        [searchQuery]: res.data[1],
      })
    );
  }
  const isSearchOpen = useSelector((state) => state.app.isSearchOpen);
  
 
  return (
    <div className="fixed top-0 w-full z-10">
      <div className="grid grid-flow-col h-[10vh] bg-white px-3  lg:px-8 py-3  ">
        <div className="lg:col-span-1 col-span-2 flex gap-2 lg:gap-5 items-center">
          <div onClick={() => dispatch(toggleSideBar())}>
            <RxHamburgerMenu className="text-2xl lg:block hidden md:block" />
          </div>
          <img
            onClick={() => navigate("/")}
            className="w-24 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </div>

        <div
          ref={menu}
          onFocus={() => dispatch(setSearchOpen(true))}
          onBlur={() => {
            setTimeout(() => {
              dispatch(setSearchOpen(false));
            }, 500);
          }}
          className="lg:col-span-10 col-span-10 w-full flex lg:justify-center justify-end "
        >
          <input
            type="text"
            className="lg:w-1/2 w-[60%] border lg:h-[83%] h-[60%] my-auto outline-none indent-9 text-xl  border-gray-400 border-r-0 rounded-l-full"
            onChange={(e) => setSeacrchQuery(e.target.value)}
            value={searchQuery}
          />
          {isSearchOpen && suggestion.length > 1 && (
            <div className="absolute flex flex-col  gap-2 justify-start  py-3 px-5 z-20 shadow-xl rounded-xl w-[40%] top-14 bg-gray-50">
              {suggestion.map((d, i) => (
                <div
                  key={i}
                  className="flex gap-3  hover:bg-gray-300  hover:rounded-xl hover:cursor-pointer px-5 items-center "
                >
                  <FaMagnifyingGlass className="text-gray-500 text-xl" />
                  <NavLink
                    onClick={()=> setSeacrchQuery(d)}
                    to={`/results?search_query=${d}`}
                    className="text-xl font-semibold py-1"
                  >
                    {" "}
                    {d}{" "}
                  </NavLink>
                </div>
              ))}
            </div>
          )}

          <button className="py-1 lg:px-6 px-4 lg:h-[83%] h-[60%] my-auto border shadow-xl rounded-r-full bg-gray-300 border-gray-400">
            <NavLink to={`/results?search_query=${searchQuery}`}>
              {" "}
              <GoSearch />
            </NavLink>
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
