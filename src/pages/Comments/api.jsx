

export const getComments=async()=>{
  return (
    [{
        id: "1",
        body: "First comment",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "12/3/2022"
      }, 
      {
        id: "2",
        body: "Second comment",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "12/3/2022"
      },
      {
        id: "3",
        body: "First comment first child",
        username: "John",
        userId: "2",
        parentId: "1",
        createdAt: "12/3/2022"
      },
      {
        id: "4",
        body: "Second comment second child",
        username: "John",
        userId: "1",
        parentId: "2",
        createdAt: "12/3/2022"
      },]
  )
}

export const createComment=async(text,parentId=null)=>{
    return{
        id:Math.random().toString(36).substr(2,9),
        body:text,
        parentId,
        userId:"1",
        usermame:"John",
        createdAt: new Date().toISOString(),
    };
};