import React, { useEffect, useState } from 'react'
import VideoList from './VideoList';
import { useSelector } from 'react-redux';
import useAddVideos from '../hooks/useAddVideos';
import Shimmer from './shimmer/Shimmer';

const VideoContainer = () => {
 
   const video = useSelector((state) => state.video.videoData);
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  useAddVideos();
 

  if (!video) {
       return <Shimmer />
     }
  return (
    <div
      className={`${
        isSideBarOpen ? "lg:ml-[15%] lg:w-[85%]" : "ml-[5%] w-[95%]"
      }    py-9 relative `}
    >
      <VideoList video={video}  />
    </div>
  );
}

export default VideoContainer
