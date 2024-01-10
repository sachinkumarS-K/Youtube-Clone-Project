export const Google_Api_Key = import.meta.env.VITE_Google_Api_Key;

export const youtubeApi = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + Google_Api_Key;

export const searchApi =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const youtubeSearchApi =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=scout on elvish yadav&key=AIzaSyCP-1yrRADYrQaFgLbeZwffkkEG3TBM