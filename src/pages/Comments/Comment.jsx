import React from "react";

const Comment = ({comment,replies}) => {
  return (
    <div className="coment">
      <div className="comment-image-container">{/* לשים פה אייקון */}</div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="cimment-author">{comment.username}</div>
          <div>{comment.createdAt}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
        {replies.length>0&&(
          <div className="replies">{replies.map(reply=>(
            <comment comment={reply} key={reply.id} replies={[]}/>
          ))}</div>
        )}
      </div>
    </div>
  );
};

export default Comment;
