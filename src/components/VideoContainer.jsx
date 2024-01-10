import React, { useEffect, useState } from 'react'
import VideoList from './VideoList';
import { useSelector } from 'react-redux';
import useAddVideos from '../hooks/useAddVideos';
import Spinner from './Spinner/Spinner';

const VideoContainer = () => {
 
   const video = useSelector((state) => state.video.videoData);
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  useAddVideos();
     useEffect(() => {     
     }, [])

  if (!video) {
       return <Spinner />
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
