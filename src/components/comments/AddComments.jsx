import React from "react";
import { useDispatch } from "react-redux";
import "../../components/comments/Comments.css"; 
import { v4 } from "uuid";
import { addComment } from "../../features/commentsSlice/commentsSlice"; 

const AddComments = () => {
  const dispatch = useDispatch();
  const addCommentSubmit = (e) => {
    e.preventDefault();
    let name = e.target[1].value;
    let comment = e.target[0].value;
    let date = e.target[2].value;
    dispatch(
      addComment({
        id: v4(),
        userName: name,
        comment,
        date,
      })
    );
  };
  return (
    <div className="commentRigth">
      <form onSubmit={addCommentSubmit}>
          <div>
            <textarea
              className="commentRigth "
              placeholder=" New Comment . . ."
              required
              type="text"
            ></textarea>
          </div>
          <div >
            <input
              className="commentRigth "
              required
              type="text"
              placeholder=" You'r Name..."
              alt="text"
            />
          </div>
          <div className="commentRigth ">
            <button  type="submit">
              Add Comment
            </button>
          </div>
      </form>
    </div>
  );
};

export default AddComments;
