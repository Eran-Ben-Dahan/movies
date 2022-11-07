// import React from 'react'
// import { useState } from 'react'

// const AddComments=({onAddComments})=> {
//     const [name, setname] = useState("");
//     const [comments, setcomments] = useState("");
    
//     const handleAddcommentsClicked=()=>{
//         const newcomments={
//             name:name,
//             comments: comments,
//         };
//         onAddComments(newcomments);
//     };
//     const handelname=(e)=>{
//         setname(e.target.value);
//     };
//     const handelcomment=(e)=>{
//         setcomments(e.target.value)
//     } 
//   return (
//     <div>
//         <div className="col">
//         <input
//           onChange={handelname}
//           type="text"
//           className="form-control"
//           placeholder="First name"
//           aria-label="First name"
//         />
//       </div>
//       <div className="col">
//         <input
//           onChange={handelcomment}
//           type="text"
//           className="form-control"
//           placeholder="Last name"
//           aria-label="Last name"
//         />
//       </div>
//       <div className="col">
//         <button onClick={handleAddcommentsClicked} className="btn btn-success">
//           Add Student
//         </button>
//       </div>
//     </div>
//   )
// }

// export default AddComments