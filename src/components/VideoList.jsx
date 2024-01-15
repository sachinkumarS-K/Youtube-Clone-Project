import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { useDispatch, useSelector } from 'react-redux';
  import InfiniteScroll from "react-infinite-scroll-component";
import { addChannelData, addVideos, setToken } from '../redux/slices/videoSlice';
import axios from 'axios';
import Spinner from "../components/Spinner/Spinner"
import { Google_Api_Key } from '../utils/constants';
const VideoList = ({ video }) => {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  const channelData = useSelector((state) => state.video.channelData);
  const token = useSelector((state) => state.video.nextPageToken);
  //console.log(token)
  const dispatch = useDispatch()

    
  async function fetchData() {
    
    if(!token) return
    // const token = "CDIQAA";
    try {
     
       const data = await fetch(
         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&pageToken=${token}&maxResults=50&regionCode=IN&key=${Google_Api_Key}`
       );
      const res = await data.json();
      
      // console.log(...res.items);
      // console.log(video)
      const videos = [...video, ...res.items]
     // console.log(videos)
    dispatch(addVideos(videos));
      if (!res.nextPageToken)
           dispatch(setToken(null));
        dispatch(setToken(res.nextPageToken));
      //console.log(res);
       const res1 = await res.items.map((video) => {
         return axios.get(
           `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${Google_Api_Key}`
         );
       });
       //AIzaSyCP-1yrRADYrQaFgLbeZwffkkEG3TBMBEw
       const json = await axios.all(res1);

      const channel = json.map((data) => data.data);
      const allChannelData = [...channelData , ...channel]
       dispatch(addChannelData(allChannelData));
     } catch (error) {
       console.log(error);
     }
  }
  useEffect(() => {
   
  }, [token])
    if (!channelData) return;
  return (
    <div>
      <InfiniteScroll
        className="w-full"
        dataLength={video.length}
        next={fetchData}
        style={{ overflow : "hidden" }}
        loader={<Spinner />}
        hasMore={video.length <= 200 ? true : false}
      >
        <div
          className={`${
            isSideBarOpen
              ? "lg:grid-cols-3 md:grid-cols-2 grid-cols-1 "
              : "lg:grid-cols-4 md:grid-cols-3 grid-cols-1"
          } lg:mt-[9rem] mt-[5rem]  grid justify-center w-[98%]    content-center gap-10 lg:gap-4 lg:px-9 px-4  relative `}
        >
          {video.map((card, idx) => (
            <VideoCard
              key={idx}
              videoData={card}
              channelData={channelData[idx]}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default VideoList
