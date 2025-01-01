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
  // jaise post list m change hoga useReducer  redeclare karega ki post change hua h and fir se postList ko repaint kargea
  
  const addPost = (post) =>{
     dispatchPostList({    // jaise hi dispatch karenge ye action jayega  post list reducer ke pass
      type:'ADD_POST',     // and action ke based pe code execute hoga
      payload:post,
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