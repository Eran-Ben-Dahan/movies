/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { useState, useEffect } from "react";
import { getComments as getCommentsApi } from "./api";
import Comment from "./Comment";

const Comments = ({ currentUserId }) => {
  const [backendComments, setbackendComments] = useState([]);
  const rootComments = backendComments.filter(
    (backendComment) => backendComments.parentId === null
  );
  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComments) => backendComments.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  console.log("backendComments", backendComments);
  useEffect(() => {
    getCommentsApi().then((data) => {
      setbackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments22</h3>
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}/>
        ))}
      </div>
    </div>
  );
};

export default Comments;

// import React from 'react'
// import "./Comments.css";
// import AddComments from './AddComments';
// function Comments() {
//   onst [Comments, setComments] = useState(arr);

//   const [eComments, setEComments] = useState({});

//   const handlePencilClicked = (id) => {
//     //find student from students by id:
//     const index = Comments.findIndex((s) => s.id === id);
//     const Comments = Comments[index];
//     setEComments({ ...Comments });
//   };

//   const handleComments = (newComments) => {
//     const lastComments = Comments.slice(-1)[0];
//     let id = 1;
//     if (lasComments) {
//       id = lastComments.id + 1;
//     }

//   return (
//     <div className="CommentsMaim">

//     {/* CommentsLeft */}
//     <div className="CommentsLeft">
//         <div>
//           <h2>Name: sedfdf</h2>
//           <p>sdgsdgsdg</p>
//         </div>
//         <div>
//           <h2>Name: sedfdf</h2>
//           <p>sdgsdgsdg</p>
//         </div>
//         <div>
//           <h2>Name: sedfdf</h2>
//           <p>sdgsdgsdg</p>
//         </div>
//       </div>

//       {/* commentRigth */}
//       <div className="commentRigth">
//         <input placeholder="Name..."></input>
//         <textarea placeholder="New comment..."></textarea>
//         <button >send</button>
//         <AddComments onAddComments={handleComments} />
//         <EditComments
//         first_name={eComments.first_name}
//         last_name={eComments.last_name}
//         email={eComments.email}
//         gender={eComments.gender}
//       />

//       <CommentsList
//         onPencilClicked={handlePencilClicked}
//         CommentsArray={comments}
//       />
//       </div>
//     </div>
//   )
// }

// export default Comments;
