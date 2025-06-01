import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
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
    {/* <div className="grid grid-cols-3"> */}

      {videos.length > 0 &&
        videos.map((video) =>          
        <Link to={"/watch?v=" + video.id}>
        <VideoCard key={video.id} item={video} />        
        </Link>     
        )}
    {/* </div> */}
    </div>
  );
};

export default VideoContainer;
