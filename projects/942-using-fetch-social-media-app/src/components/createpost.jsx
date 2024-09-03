import { useContext, useRef } from "react";
import  { PostList } from "../store/post-list-store";

const CreatePost = () =>{
   const {addPost}              = useContext(PostList);
   const userIdElement        = useRef();
   const postTitleElement     = useRef();
   const postContentElement   = useRef();
   const postReactionsElement = useRef();
   const postHashTagsElement  = useRef();

   const handlePostSubmit =() => {
       event.preventDefault();
      const userId        =  userIdElement.current.value;
      const postTitle     =  postTitleElement.current.value;
      const postContent   = postContentElement.current.value;
      const postReactions = postReactionsElement.current.value;
      const postHashTags  = postHashTagsElement.current.value.split(" ") 
      
      addPost(userId,postTitle,postContent,postReactions,postHashTags);
    
   }
    return (
        <>
        <form className="create-post" onSubmit={()=>handlePostSubmit()}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">Enter your user id here</label>
          <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Enter user id" />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you felling today.." />
        </div>

        <div className="mb-3">
          <label htmlFor="post" className="form-label">Post Content</label>
          <textarea type="text" ref={postContentElement}  rows="4" className="form-control" id="post" placeholder="Tell us more about it" />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Reactions</label>
          <input type="text" ref={postReactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post"/>
        </div>

        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">Hashtags</label>
          <input type="text" ref={postHashTagsElement} className="form-control" id="hashtags" placeholder="Enter your hashtags using space"/>
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
      </form>
        </>
    )
}

export default CreatePost;