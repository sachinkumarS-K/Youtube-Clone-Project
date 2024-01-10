import { useEffect } from 'react'
import { Google_Api_Key, youtubeApi } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addChannelData, addVideos } from '../redux/slices/videoSlice';
import axios from 'axios';

const useAddVideos = () => {
     const dispatch = useDispatch();
     async function getVideoData() {
       try {
         const data = await fetch(youtubeApi);
         const res = await data.json();

         dispatch(addVideos(res.items));
         console.log(res);
         const res1 = await res.items.map((video) => {
           return axios.get(
             `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${Google_Api_Key}`
           );
         });
         //AIzaSyCP-1yrRADYrQaFgLbeZwffkkEG3TBMBEw
         const json = await axios.all(res1);

         const channelData = json.map((data) => data.data);
         dispatch(addChannelData(channelData));
       } catch (error) {
         console.log(error);
       }
     }

     useEffect(() => {
          getVideoData();
     } , [])
}

export default useAddVideos
