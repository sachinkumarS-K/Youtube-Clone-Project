import React from 'react'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux';

const VideoList = ({ video }) => {
   const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  return (
    <div
      className={`${
        isSideBarOpen ? "grid-cols-3" : "grid-cols-4"
      } mt-[6.1rem] grid justify-center content-center  gap-4 px-10 w-full relative `}
    >
      {video.map((card) => (
        <VideoCard key={card.id} videoData={card} />
      ))}
    </div>
  );
}

export default VideoList
