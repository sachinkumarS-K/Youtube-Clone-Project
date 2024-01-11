import React from 'react'
import { useSelector } from 'react-redux';
import SearchVideoCard from './SearchVideoCard';

const SearchResultVideos = () => {


     const data = useSelector((state) => state.video.searchData);
    if(!data) return
     const searchVideos = data.filter((res) => res.id.kind === "youtube#video");
      console.log(searchVideos);
  return (
    <div className="w-full">
      <div className="lg:w-10/12 w-full  mx-auto space-y-2">
        {searchVideos.map((data) => (
          <SearchVideoCard key={data.id.videoId} data={data} />
        ))}
      </div>
    </div>
  );
}

export default SearchResultVideos
