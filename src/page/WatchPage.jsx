import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBar } from '../redux/slices/appSlice';

const WatchPage = () => {
     const dispatch = useDispatch();
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 

    
  return (
    <div>
            
    </div>
  );
}

export default WatchPage
