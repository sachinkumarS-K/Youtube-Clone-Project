import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import formatNumber from '../utils/formatNumber';
import { IoIosCheckmarkCircle } from "react-icons/io";
const VideoCard = ({ videoData, channelData }) => {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen);
  //const [active, setActive] = useState(false);

  // useEffect(() => {

  //   return () => {
  //     setActive(false)
  //   }
  // } , [a])

  return (
    <div
      className={`${
        isSideBarOpen ? " " : " "
      }  hover:cursor-pointer -mt-8 w-full mb-5 lg:h-[25rem] h-[20rem] flex flex-col items-start justify-self-stretch  `}
    >
      <div className="w-full">
        <Link to={`/watch?v=${videoData.id}`} className="  aspect-auto">
          <img
            className="w-full h-[75%]  shadow-xl shadow-gray-300 rounded-xl object-cover"
            src={videoData.snippet.thumbnails.high.url}
          />
        </Link>
      
      </div>
      <ul className="py-1 lg:-mt-18 -mt-12 lg:px-3  px-1">
        <li className="w-full flex gap-2 items-center font-semibold ">
          {" "}
          <img
            className="w-12 rounded-full h-8 "
            src={channelData.items[0].snippet.thumbnails.high.url}
            alt=""
          />{" "}
          {videoData.snippet.title}{" "}
        </li>
        <div className="ml-6 pt-1 px-6">
          <li className="lg:text-lg text-sm flex items-center gap-2">
            {" "}
            {videoData.snippet.channelTitle}{" "}
            <IoIosCheckmarkCircle className='text-gray-400 text-sm ' />
          </li>
        </div>
        <li className="text-lg ml-6 px-6">
          {formatNumber(videoData.statistics.viewCount)} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard
