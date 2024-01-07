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
      "https://www.googleapis.com/youtube/v3/i18nLanguages"
    );
    const json = await res.json();
    console.log(json)
  }
  useEffect(() => {
    dispatch(closeSideBar());
  
  } , [])
    
  return (
    <div>
      {isSideBarOpen && <Sidebar />}
      <div className='mt-20 relative'>
        <iframe
          
          className='aspect-video translate-x-32 absolute object-cover rounded-xl'
          width="950"
          height="480"
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default WatchPage
