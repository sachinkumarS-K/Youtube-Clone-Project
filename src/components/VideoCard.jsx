import React, { useState } from 'react'
import { Google_Api_Key } from '../utils/constants';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoCard = ({ videoData }) => {
      const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  return (
    <div
      className={`${
        isSideBarOpen ? " " : " "
      }  hover:cursor-pointer w-full h-[25rem] flex flex-col items-start justify-self-stretch  `}
    >
      <Link to={`/watch/v/${videoData.id}`} className="w-full aspect-auto">
        <img
          className="w-full h-[75%]  shadow-lg rounded-xl object-cover"
          src={videoData.snippet.thumbnails.high.url}
        />
      </Link>
      <ul className="py-2 -mt-14 px-3 ">
        <li className=""> {videoData.snippet.title} </li>
        <li className="text-lg"> {videoData.snippet.channelTitle} </li>
        <li className="text-lg"> {videoData.statistics.viewCount} </li>
      </ul>
    </div>
  );
}

export default VideoCard
