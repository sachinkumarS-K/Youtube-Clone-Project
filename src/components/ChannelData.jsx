import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const ChannelData = () => {
     
      const data = useSelector((state) => state.video.searchChannelData);
     // if (!data) return
    // console.log(data);
    
    if(!data) return
  return (
    <div className="w-full lg:mt-0 -mt-[4rem] ">
      <div className="lg:w-10/12  w-full mx-auto lg:flex-row items-center flex justify-around lg:gap-[5rem] ">
        <div className="lg:h-15 w-20 lg:w-[13%]">
          <img
            src={data.snippet.thumbnails.high.url}
            className="w-full lg:h-full h-20 rounded-full"
            alt=""
          />
        </div>
        <div className="py-5 lg:px-6 space-y-1 w-[60%] ">
          <p className="font-semibold text-xl tracking-wide">
            {data.snippet.channelTitle}
          </p>
          <p className="text-sm opacity-60">{data.snippet.description} </p>
        </div>
        <div className="m-auto py-5 lg:px-6 lg:block hidden ">
          <button className="bg-slate-900  py-2 px-5 text-white rounded-2xl ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChannelData
