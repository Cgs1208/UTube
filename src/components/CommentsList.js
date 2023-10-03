import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  //dont use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-2 ml-4 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
