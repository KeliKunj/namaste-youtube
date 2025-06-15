import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments?.map((comment) => (
    <div key={comment.commentId}>
      <Comment data={comment} />
      <div className="pl-6 ml-4 border-l border-gray-400">
        <CommentList key={comment.commentId} comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
