import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList : [],
    addPost: ()=>{},
    addInitialPosts : ()=>{},
    deletePost: ()=>{}
});

const postListReducer = (currPostList, action) =>{
    let newPostList =  currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post)=>post.id !== action.payload.postId)
    }else if(action.type === 'ADD_POST'){
        newPostList =  [action.payload, ...currPostList]
    }else if(action.type === 'ADD_INITIAL_POST'){
      newPostList =  action.payload.posts
  }

   return newPostList;
}

const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] =  useReducer(postListReducer,[]);
  
  const addPost = (userId,postTitle,postContent,postReactions,postHashTags) =>{
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

  const addInitialPosts = (posts) =>{
    dispatchPostList({
     type:'ADD_INITIAL_POST',
     payload:{
       posts
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
    addInitialPosts:addInitialPosts,

   }} >
    {children}
   </PostList.Provider>
   );

}
export default PostListProvider;