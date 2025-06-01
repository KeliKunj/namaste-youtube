const GOOGLE_API_KEY = "AIzaSyBl4Ud7rpWz8vbNFiKOHudIffEJzBghWM0";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// export const YOUTUBE_VIDEOS_BY_ID_API = {`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${GOOGLE_API_KEY}`};
const queryString = "namaste";

const SEARCH_VIDEOS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${queryString}&maxResults=25&key=${GOOGLE_API_KEY}`;

export const SEARCH_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const list = [
  "ipl",
  [
    "ipl",
    "ipl live",
    "ipl auction 2025",
    "ipl 2025",
    "ipl match",
    "ipl song",
    "ipl live match",
    "ipl opening ceremony 2025",
    "ipl auction",
    "ipl auction 2025 live",
  ],  
];
