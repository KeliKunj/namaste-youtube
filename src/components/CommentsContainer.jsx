import React from "react";
import {commentData} from '../utils/constants';
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <>
      <div className="text-lg font-bold">Comments: </div>
      <CommentList comments={commentData} />
    </>
  );
};

export default CommentsContainer;
