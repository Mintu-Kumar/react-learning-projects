import { useContext, useEffect } from "react";
import Post from "./post";
import {PostList as PostListData} from "../store/post-list-store";
import WelcomeMessage from "./welcomeMessage";
const PostList = () =>{
    const {postList,addInitialPosts} = useContext(PostListData);

   /* useEffect(()=>{
      const controller  =new AbortController();
      const signal =  controller.signal;
      fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then(data =>addInitialPosts(data.posts));

      return(()=>{
        controller.abort();
      })
    },[])*/
    return(
      <>
      {postList.length ===0 && <WelcomeMessage/>}
      {postList.map((post)=>(<Post key={post.id} post={post} />))}
       
      </>
    );
}

export default PostList;