import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import formatNumber from '../utils/formatNumber';
import { IoIosCheckmarkCircle } from "react-icons/io";
import calulateTime from '../utils/calculateTime';
import { getDate } from '../utils/getDate';
const VideoCard = ({ videoData, channelData }) => {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen);
  //const [active, setActive] = useState(false);

  // useEffect(() => {

  //   return () => {
  //     setActive(false)
  //   }
  // } , [a])
  const time = Date.parse(videoData.snippet.publishedAt);

  let date = new Date(time);
  let year = getDate(date) ;
  // console.log(year);
  // if (year  < 12) {
  //   year = `${year%7} months`;
  // }
  // else if (year < 12) {
  //   year = `${year} months`;
  // } else if (year >= 12 && year < 24) {
  //   year = "1 Years";
  // } else if (year >= 24) {
  //   year = "2 years";
  // }
//console.log(year)
  return (
    <div
      className={`${
        isSideBarOpen ? " " : " "
      }  hover:cursor-pointer -mt-8 w-full mb-5 lg:h-[25rem] h-[20rem] flex flex-col items-start justify-self-stretch  `}
    >
      <div className="w-full">
        <Link to={`/watch?v=${videoData.id}`} className=" relative aspect-auto">
          <img
            className="w-full h-[75%]  shadow-xl shadow-gray-300 rounded-xl object-cover"
            src={videoData.snippet.thumbnails.high.url}
          />
          <p className="absolute right-3 top-[85%] bg-black text-center text-sm px-1 rounded-md text-white ">
            {" "}
            {calulateTime(videoData.contentDetails.duration)}
          </p>
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
            <IoIosCheckmarkCircle className="text-gray-400 text-sm " />
          </li>
        </div>
        <div className="flex gap-1 items-center">
          <li className="text-lg ml-6 pl-6 pr-3">
            {formatNumber(videoData.statistics.viewCount)} views 
          </li>
          <div className='w-2 h-2 rounded-full bg-slate-600'></div>
          {year > 0 ? (
            <p className="lg:p-2 pb-1 font-semibold"> {year} days ago ... </p>
          ) : (
            <p className="lg:p-2 pb-1 font-semibold">  min's ago ... </p>
          )}
        </div>
      </ul>
    </div>
  );
};

export default VideoCard
