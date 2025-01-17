import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import CreatePost, { createPostAction } from './components/createpost.jsx';
import PostList, { postLoader } from './components/PostList.jsx';

const router = createBrowserRouter([
  { 
    path:"/",
    element:<App/>,   
    children:[
    {path:"/",element:<PostList/>,loader:postLoader},
    {path: "/create-post",element:<CreatePost/>,action:createPostAction}
  ]},
  
  //line nu 10 slash pe app to dikhna hi chahiye but uske baad path ke according path include honi chahiye
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
