import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST =[
    {
      id:"1",
      title:"Going to Mumbai",
      body:"I'm going to mumbai for my vacation. i hope to enjoy a lot",
      reactions:2,
      userId:"user-9",
      tags:["Mumbai","Vaction","Enjoying"],
    },
    {
        id:"2",
        title:"Pass ho gye bhai",
        body:" 4 sal ke mje krne ke baad bhi pass ho gye Hard to believe",
        reactions:15,
        userId:"user-12",
        tags:["Graduating","Enjoying"]
      },
   ]
export const PostList = createContext({
    postList : [],
    addPost: ()=>{},
    deletePost: ()=>{}
});

const postListReducer = (currPostList, action) =>{
    let newPostList =  currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post)=>post.id !== action.payload.postId)
    }else if(action.type === 'ADD_POST'){
        newPostList =  [action.payload, ...currPostList]
    }
   return newPostList;
}

const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] =  useReducer(postListReducer,DEFAULT_POST_LIST);
  
  const addPost = (userId,postTitle,postContent,postReactions,postHashTags) =>{
    // console.log(`${userId} ${postTitle} ${postContent} ${postReactions} ${postHashTags}`)

     dispatchPostList({
      type:'ADD_POST',
      payload:{
        id: Date.now,
        title: postTitle,
        body: postContent,
        reactions: postReactions,
        userId: userId,
        tags: postHashTags,
      }
     })
      
  }
  const deletePost = (postId) => {
    dispatchPostList({
      type:'DELETE_POST',
      payload: {postId,},
    })
  
  }

  return(
   <PostList.Provider value={{
    postList:postList,
    addPost: addPost,
    deletePost: deletePost,
   }} >
    {children}
   </PostList.Provider>
   );

}
export default PostListProvider;