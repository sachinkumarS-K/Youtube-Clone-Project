import React, { useEffect } from 'react'
import VideoContainer from '../components/VideoContainer'
import Sidebar from '../components/Sidebar';
import SmallSideBar from '../components/SmallSideBar';
import ButtonList from '../components/ButtonList';
import { useDispatch, useSelector } from 'react-redux';
import { opneSideBar } from '../redux/slices/appSlice';

const Home = () => {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(opneSideBar())
  } , [])
  return (
    <div className='w-full'>
      {isSideBarOpen ? <Sidebar /> : <SmallSideBar />}
      <ButtonList />
      <VideoContainer />
    </div>
  );
}

export default Home
