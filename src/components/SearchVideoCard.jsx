import React from 'react'
import { useSelector } from 'react-redux';
import { getDate } from '../utils/getDate';
import { Link, NavLink } from 'react-router-dom';

const SearchVideoCard = ({ data }) => {
     const channelData = useSelector((state) => state.video.searchChannelData);
     const time = Date.parse(data.snippet.publishedAt);
  
     let date = new Date(time);
     let year = getDate(date) + 1;
     if (year < 12) {
          year = `${year} months`
     }
     else if (year >= 12 && year<24) {
          year = "1 Years"
     }
     else if (year >= 24) {
          year = "2 years"
     }

  return (
    <div className="lg:my-8 flex gap-5 lg:flex-row flex-col">
      <Link to={`/watch?v=${data.id.videoId}`} className="  aspect-auto">
        <img
          className="w-full lg:h-[75%]  shadow-xl shadow-gray-300 rounded-xl object-cover"
          src={data.snippet.thumbnails.high.url}
        />
      </Link>
      <div className=" w-full">
        <p className="text-ellipsis font-normal  text-black text-xl">
          {data.snippet.title}
        </p>
        <div className="flex items-center gap-3">
          <div>
            <img
              className="lg:w-8 lg:h-auto h-10 rounded-full my-4"
              src={channelData?.snippet?.thumbnails.high.url}
              alt=""
            />
          </div>

          <p className="w-full"> {data.snippet.channelTitle} </p>
        </div>
        <p className="p-2"> {year} ago . </p>
        <p className="text-sm opacity-80">{data.snippet.description}</p>
      </div>
    </div>
  );
}

export default SearchVideoCard
