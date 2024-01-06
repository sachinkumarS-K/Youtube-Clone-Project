import React from 'react'
import VideoContainer from '../components/VideoContainer'
import Sidebar from '../components/Sidebar';
import SmallSideBar from '../components/SmallSideBar';
import ButtonList from '../components/ButtonList';
import { useSelector } from 'react-redux';

const Home = () => {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  return (
    <div className='w-full'>
      {isSideBarOpen ? <Sidebar /> : <SmallSideBar />}
      <ButtonList />
      <VideoContainer />
    </div>
  );
}

export default Home
