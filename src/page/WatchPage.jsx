import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { closeSideBar, toggleSideBar } from '../redux/slices/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
     const dispatch = useDispatch();
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  const [searchParams] = useSearchParams();

  async function getData() {
    const res = await fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCBnxEdpoZwstJqC1yZpOjRA&key=AIzaSyCP-1yrRADYrQaFgLbeZwffkkEG3TBMBEw"
    );
    const json = await res.json();
    console.log(json)
  }
  useEffect(() => {
    dispatch(closeSideBar());
  //getData()
  } , [])
    
  return (
    <div>
      {isSideBarOpen && <Sidebar />}
      <div className='mt-20 relative'>
        <iframe
          
          className='aspect-video w-full  lg:w-[850px] lg:h-[450px] lg:translate-x-32 absolute object-cover rounded-xl'
         
         
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?autoplay=1`}
          title="YouTube video player"
          
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default WatchPage
