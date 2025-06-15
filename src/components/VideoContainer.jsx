import React, { useState, useEffect } from "react";
import VideoCard, { AdCards } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getVideosData();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos.length > 0 && <AdCards item={videos[0]} />}
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard item={video} />
          </Link>
        ))}      
    </div>
  );
};

export default VideoContainer;
