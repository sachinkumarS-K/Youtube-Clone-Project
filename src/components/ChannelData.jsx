import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const ChannelData = () => {
     
      const data = useSelector((state) => state.video.searchChannelData);
     // if (!data) return
    // console.log(data);
    
    if(!data) return
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto flex gap-[5rem] ">
        <div className="h-15 w-[13%]">
          <img
            src={data.snippet.thumbnails.high.url}
            className="w-full h-full rounded-full"
            alt=""
          />
        </div>
        <div className="py-5 px-6 space-y-1 w-[60%] ">
          <p className="font-semibold text-xl tracking-wide">
            {data.snippet.channelTitle}
          </p>
          <p className="text-sm opacity-60">{data.snippet.description} </p>
        </div>
        <div className="m-auto py-5 px-6 ">
          <button className="bg-slate-900  py-2 px-5 text-white rounded-2xl ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChannelData
