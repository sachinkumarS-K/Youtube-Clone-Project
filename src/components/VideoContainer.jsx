import React, { useEffect, useState } from 'react'
import { youtubeApi } from '../utils/constants'
import VideoList from './VideoList';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
     const [video , setVideos] = useState([])
     async function getData() {
          const data = await fetch(youtubeApi);
          const res = await data.json();
          console.log(res);
          setVideos(res.items)
     }
     useEffect(() => {
          getData()
     }, [])
      const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
     
  return (
    <div
      className={`${
        isSideBarOpen ? "ml-[15%] w-[85%]" : "ml-[5%] w-[95%]"
      }    py-9 relative `}
    >
      <VideoList video={video} />
    </div>
  );
}

export default VideoContainer
