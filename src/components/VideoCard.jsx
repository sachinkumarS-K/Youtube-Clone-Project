import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import formatNumber from '../utils/formatNumber';

const VideoCard = ({ videoData, channelData }) => {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen);
  return (
    <div
      className={`${
        isSideBarOpen ? " " : " "
      }  hover:cursor-pointer -mt-8 w-full mb-5 lg:h-[25rem] h-[20rem] flex flex-col items-start justify-self-stretch  `}
    >
      <Link to={`/watch?v=${videoData.id}`} className="w-full  aspect-auto">
        <img
          className="w-full h-[75%]  shadow-xl shadow-gray-300 rounded-xl object-cover"
          src={videoData.snippet.thumbnails.high.url}
        />
      </Link>
      <ul className="py-2 lg:-mt-12 -mt-12 lg:px-3  px-1">
        <li className="w-full"> {videoData.snippet.title} </li>
        <div className='flex gap-2 items-center'>
          <img className='w-8 rounded-full h-7 ' src={channelData.items[0].snippet.thumbnails.high.url} alt="" />
          <li className="lg:text-lg text-sm"> {videoData.snippet.channelTitle} </li>
        </div>
        <li className="text-lg">
          {formatNumber(videoData.statistics.viewCount)}{" "}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard
