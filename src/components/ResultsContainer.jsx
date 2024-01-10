import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ChannelData from './ChannelData';
import SearchResultVideos from './SearchResultVideos';

const ResultsContainer = () => {
     const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  return (
    <div
      className={`${
        isSideBarOpen ? "lg:ml-[15%] lg:w-[85%]" : "ml-[5%] w-[95%]"
      }    py-9 absolute top-[7rem] `}
    >
      <ChannelData />
      <SearchResultVideos />
    </div>
  );
}

export default ResultsContainer
