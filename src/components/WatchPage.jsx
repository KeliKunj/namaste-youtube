import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
    <div className="flex p-2 mt-4">    
      <div className="mx-4">
        <iframe
          className="rounded-xl border border-gray-300"
          width="700"
          height="400"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>      
        <LiveChat />      
        </div>
      <div className="p-2 mx-4">
        <CommentsContainer />
      </div>
    </>
  );
};

export default WatchPage;
