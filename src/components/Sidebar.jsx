import React from 'react'
import { useSelector } from 'react-redux';
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubegaming } from "react-icons/si";
import { MdMovieCreation } from "react-icons/md";
import { ImFire } from "react-icons/im";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaMusic } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BiTrophy } from "react-icons/bi";
import { BsLightbulb } from "react-icons/bs";
import { FaShirt } from "react-icons/fa6";
import { MdPodcasts } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className="w-[15%] fixed top-0 z-10 shadow-xl h-[90vh] mt-[10vh] hover:overflow-y-scroll bg-white scroll-smooth scroll">
      <div>
        <div className=" mt-5 flex flex-col gap-3">
          <div className="flex flex-col gap-3 px-5">
            <div className="flex gap-3 items-center">
              <GoHome className="text-xl text-gray-500" />
              <p className="font-semibold text-lg">Home</p>
            </div>
            <div className="flex gap-3 items-center">
              <SiYoutubeshorts className="text-xl text-gray-500" />
              <p className="font-semibold text-lg">Shorts</p>
            </div>
            <div className="flex gap-3 items-center">
              <MdSubscriptions className="text-xl text-gray-500" />
              <p className="font-semibold text-lg">Subscription</p>
            </div>
          </div>
          <div className="w-[90%] h-[1px] bg-gray-500 mx-auto "></div>
          <div className="flex flex-col gap-3 px-5">
            <div className="flex gap-3 items-center">
              <MdOutlineVideoLibrary className="text-xl text-gray-500" />
              <p className="font-semibold text-lg">Library</p>
            </div>
            <div className="flex gap-3 items-center">
              <MdHistory className="text-xl text-gray-500" />
              <p className="font-semibold text-lg">History</p>
            </div>
            <div className="flex gap-3 items-center">
              <MdOutlineWatchLater className="text-xl text-gray-500" />
              <p className="font-semibold text-lg">Watch Later</p>
            </div>
          </div>
          <div className="w-[90%] h-[1px] bg-gray-500 mx-auto "></div>
          <div className="flex flex-col gap-3 px-5">
            <p>Subscription</p>
            <div className="flex gap-3 items-center">
              <SiApplemusic className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Music</p>
            </div>
            <div className="flex gap-3 items-center">
              <SiYoutubegaming className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Sports</p>
            </div>
            <div className="flex gap-3 items-center">
              <MdMovieCreation className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Movies</p>
            </div>
          </div>
          <div className="w-[90%] h-[1px] bg-gray-500 mx-auto "></div>
          <div className="flex flex-col gap-3 px-5">
            <p>Explore</p>
            <div className="flex gap-3 items-center">
              <ImFire className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Trending</p>
            </div>
            <div className="flex gap-3 items-center">
              <HiMiniShoppingBag className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Shopping</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaMusic className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Music</p>
            </div>
            <div className="flex gap-3 items-center">
              <HiStatusOnline className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Live</p>
            </div>
            <div className="flex gap-3 items-center">
              <SiYoutubegaming className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Gaming</p>
            </div>
            <div className="flex gap-3 items-center">
              <HiOutlineNewspaper className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">News</p>
            </div>
            <div className="flex gap-3 items-center">
              <BiTrophy className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Sports</p>
            </div>
            <div className="flex gap-3 items-center">
              <BsLightbulb className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Learning</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaShirt className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Fashion & Beauty</p>
            </div>
            <div className="flex gap-3 items-center">
              <MdPodcasts className="text-xl text-gray-500" />{" "}
              <p className="font-semibold text-lg">Podcast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
