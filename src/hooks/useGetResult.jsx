import axios from 'axios'
import React, { useEffect } from 'react'
import { Google_Api_Key, searchApi } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addSearchChannelData, addSearchVideo } from '../redux/slices/videoSlice'

const useGetResult = (search) => {
     console.log(search)
     const dispatch = useDispatch()
     async function getVideos() {
          const res = await axios.get(`${searchApi}${search}&key=${Google_Api_Key}`);
          console.log(res);
          dispatch(addSearchVideo(res.data.items));
              
          const channelData = res.data.items.filter(
               (data) => data.id.kind === "youtube#channel");
          console.log(channelData)
          dispatch(addSearchChannelData(channelData[0]));
}

     useEffect(() => {
       getVideos();
     }, [search]);
}

export default useGetResult
