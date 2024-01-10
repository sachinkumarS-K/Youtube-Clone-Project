import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import SmallSideBar from '../components/SmallSideBar';
import ButtonList from '../components/ButtonList';
import { opneSideBar } from '../redux/slices/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import ResultsContainer from '../components/ResultsContainer';
import { useSearchParams } from 'react-router-dom';
import useGetResult from '../hooks/useGetResult';
import { addSearchChannelData, addSearchVideo, setChannelDate } from '../redux/slices/videoSlice';
import { Google_Api_Key, searchApi } from '../utils/constants';
import axios from 'axios';

const ResultPage = () => {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
 // dispatch(setChannelDate())
  //console.log(searchParams.get("search_query"))
    useGetResult(searchParams.get("search_query"));

  useEffect(() => {
   // getData()
    dispatch(opneSideBar());
  }, []);
  return (
    <div>
      <div className="w-full overflow-hidden">
        {isSideBarOpen ? <Sidebar /> : <SmallSideBar />}
        <ButtonList />
      </div>
      <ResultsContainer />
    </div>
  );
}

export default ResultPage
