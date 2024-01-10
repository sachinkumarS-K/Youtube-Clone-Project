import React, { useState } from 'react'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux';

const VideoList = ({ video }) => {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  const channelData = useSelector((state) => state.video.channelData); 
  if (!channelData) return;
  
  return (
    <div
      className={`${
        isSideBarOpen
          ? "lg:grid-cols-3 md:grid-cols-2 grid-cols-1 "
          : "lg:grid-cols-4 md:grid-cols-3 grid-cols-1"
      } lg:mt-[9rem] mt-[5rem] grid justify-center content-center gap-14 lg:gap-4 lg:px-10 px-4 w-full relative `}
    >
      {video.map((card, idx) => (
        <VideoCard
          key={card.id}
          videoData={card}
         
          channelData={channelData[idx]}
        />
      ))}
    </div>
  );
}

export default VideoList
