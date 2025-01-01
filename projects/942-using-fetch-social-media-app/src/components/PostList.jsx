import { useContext, useEffect } from "react";
import Post from "./post";
import {PostList as PostListData} from "../store/post-list-store";
import WelcomeMessage from "./welcomeMessage";
const PostList = () =>{
    const {postList,addInitialPosts} = useContext(PostListData);

    useEffect(()=>{
      const controller  =new AbortController(); // use effect  m jb bhi fetch use krte h to hme ideally isko abort krna chahiye jb api ka result hme mil jaye jo hm return m kr rhe h
      const signal =  controller.signal;   // isko hm useEffect clean up kahte h
      fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then(data =>addInitialPosts(data.posts));

      return(()=>{
        controller.abort();
      })
    },[])
    return(
      <>
      {postList.length ===0 && <WelcomeMessage/>}
      {postList.map((post)=>(<Post key={post.id} post={post} />))}
       
      </>
    );
}

export default PostList;