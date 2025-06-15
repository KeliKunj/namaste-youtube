const GOOGLE_API_KEY = "AIzaSyBl4Ud7rpWz8vbNFiKOHudIffEJzBghWM0";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// export const YOUTUBE_VIDEOS_BY_ID_API = {`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${GOOGLE_API_KEY}`};
const queryString = "namaste";

const SEARCH_VIDEOS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${queryString}&maxResults=25&key=${GOOGLE_API_KEY}`;

export const SEARCH_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentData = [
  {
    commentId: "1",
    name: "John Doe",
    text: "This is a great video!",
    timestamp: "2023-10-01T12:00:00Z",
    replies: [],
  },
  {
    commenId: "2",
    name: "Jane Smith",
    text: "I learned a lot from this!",
    timestamp: "2023-10-01T12:05:00Z",
    replies: [
      {
        commentId: "2-1",
        name: "Alice Johnson",
        text: "I agree, very informative!",
        timestamp: "2023-10-01T12:01:00Z",
      },
      {
        commentId: "2-2",
        name: "Bob Brown",
        text: "Thanks for sharing!",
        timestamp: "2023-10-01T12:02:00Z",
      },
    ],
  },
  {
    commentId: "3",
    name: "John Doe",
    text: "This is a great video!",
    timestamp: "2023-10-01T12:00:00Z",
    replies: [
      {
        commentId: "3-1",
        name: "Alice Johnson",
        text: "I agree, very informative!",
        timestamp: "2023-10-01T12:01:00Z",
        replies: [
          {
            commentId: "3-1-1",
            name: "Charlie Green",
            text: "Absolutely, I learned so much!",
            timestamp: "2023-10-01T12:03:00Z",
          },
        ],
      },
      {
        commentId: "3-2",
        name: "Bob Brown",
        text: "Thanks for sharing!",
        timestamp: "2023-10-01T12:02:00Z",
        replies: [
          {          
            commentId: "3-2-1",
            name: "David White",
            text: "I found it very helpful too!",
            timestamp: "2023-10-01T12:04:00Z",
            replies: [
              {
                commentId: "3-2-1-1",
                name: "Eve Black",
                text: "Great insights, thank you!",
                timestamp: "2023-10-01T12:06:00Z",
              },
            ],
          },
          {
            commentId: "3-2-2",
            name: "Eve Black",
            text: "Great insights, thank you!",
            timestamp: "2023-10-01T12:06:00Z",
          },
        ],
      },
    ],
  },
  {
    commentId: "4",
    name: "Jane Smith",
    text: "I learned a lot from this!",
    timestamp: "2023-10-01T12:05:00Z",
    replies: [
      {
        commentId: "4-1",
        name: "Alice Johnson",
        text: "I agree, very informative!",
        timestamp: "2023-10-01T12:01:00Z",
      },
      {
        commentId: "4-2",
        name: "Bob Brown",
        text: "Thanks for sharing!",
        timestamp: "2023-10-01T12:02:00Z",
      },
    ],
  },
];

export const OFFSET_LIVE_CHAT = 25;