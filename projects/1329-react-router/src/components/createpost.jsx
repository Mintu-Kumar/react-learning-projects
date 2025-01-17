import { useContext, useRef } from "react";
import  { PostList } from "../store/post-list-store";
import { redirect, useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";

const CreatePost = () =>{
   //const {addPost}              = useContext(PostList);
   //const navigate =  useNavigate();
  //  const userIdElement        = useRef();
  //  const postTitleElement     = useRef();
  //  const postContentElement   = useRef();
  //  const postReactionsElement = useRef();
  //  const postHashTagsElement  = useRef();

  //  const handlePostSubmit =() => {
  //      event.preventDefault();
  //     const userId        =  userIdElement.current.value;
  //     const postTitle     =  postTitleElement.current.value;
  //     const postContent   = postContentElement.current.value;
  //     const postReactions = postReactionsElement.current.value;
  //     const postHashTags  = postHashTagsElement.current.value.split(" ") 

    
    return (
        <>
        <Form method="POST" className="create-post" >
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">Enter your user id here</label>
          <input type="text" name="userId" className="form-control" id="userId" placeholder="Enter user id" />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" name="title" className="form-control" id="title" placeholder="How are you felling today.." />
        </div>

        <div className="mb-3">
          <label htmlFor="post" className="form-label">Post Content</label>
          <textarea type="text" name="body"  rows="4" className="form-control" id="post" placeholder="Tell us more about it" />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Reactions</label>
          <input type="text" name="reactions" className="form-control" id="reactions" placeholder="How many people reacted to this post"/>
        </div>

        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">Hashtags</label>
          <input type="text" name="tags" className="form-control" id="hashtags" placeholder="Enter your hashtags using space"/>
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
      </Form>
        </>
    )
};

export async function createPostAction (data ) {
  const formData =  await data.request.formData();
  const postData =  Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post=>{console.log(post);
  //navigate("/");
  }
  
 // navigate("/");  we can write navigate here also but weather our post return error or success it will always redirect to home page
);

return redirect("/");
}

export default CreatePost;