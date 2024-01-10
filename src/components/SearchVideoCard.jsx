import React from 'react'
import { useSelector } from 'react-redux';
import { getDate } from '../utils/getDate';

const SearchVideoCard = ({ data }) => {
     const channelData = useSelector((state) => state.video.searchChannelData);
     
     const time = Date.parse(data.snippet.publishedAt);
     //console.log(time)
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
    <div className="my-8 flex gap-5">
      <div>
        <img
          className="rounded-2xl max-w-[35rem] "
          src={data.snippet.thumbnails.medium.url}
        />
      </div>
      <div className=" w-full">
        <p className="text-ellipsis font-normal  text-black text-xl">
          {data.snippet.title}
        </p>
        <div className='flex items-center gap-3'>
          <img
            className="w-8 rounded-full my-4"
            src={channelData.snippet.thumbnails.high.url}
            alt=""
          />
          <p className='w-full'>  {data.snippet.channelTitle} </p>
                 </div>
                 <p className='p-2'> {year}  ago . </p>
        <p className="text-sm opacity-80">{data.snippet.description}</p>
      </div>
    </div>
  );
}

export default SearchVideoCard
