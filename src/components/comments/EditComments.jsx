import React from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IconTrash, IconEdit } from '@tabler/icons';
import { useEffect } from "react";
import "../../components/comments/Comments.css"; 
import {deleteComment, editComment}from "../../features/commentsSlice/commentsSlice"



const EditComment = () => {
  const comments = useSelector((state) => state.commentsReducer.comments);
  const dispatch = useDispatch();
  const [editting, setEditting] = useState({});  

  const submit = (e,comment) =>{
    e.preventDefault()
    const newCommentContent = e.target[0].value
    let newComment = {...comment,comment:newCommentContent}
    dispatch(editComment(newComment))
    const m = editting
    editting[comment.id] = false
    setEditting({...m})
  }

  useEffect(() => {
    const ids = comments.map((comment) => comment.id);
    const ed = {};
    for (let id in ids) ed[id] = false;
    setEditting(ed);
  }, [comments]);

  return  <div >
              {comments.map((comment) => (
                  <div key={comment.writerName + comment.date}>
                    {editting[comment.id] ? (
                    <form onSubmit={(e) =>{submit(e,comment)}}>
                        <input type="text" placeholder={comment.comment} />
                        <button>clik me</button>  
                    </form>
                    ) : (
                      <div  >
                        <span className="CommentsLeft">
                            <div className="userName">{comment.userName}</div>
                            <p >{comment.comment}</p>
                            <div className="date">{comment.date}</div>
                            <div className="icons">
                              <div><IconTrash onClick={() => {dispatch(deleteComment(comment.id));}}/></div>
                              <div><IconEdit onClick={() => {const m = editting; m[comment.id] = !m[comment.id]; setEditting({ ...m });}}/></div>
                            </div>
                        </span>
                      </div>
                    )}
                  </div>
              ))}
          </div>
};
export default EditComment;