import React, { useRef, useState } from "react";
import Counter from "./Counter/Counter";
import "../styles/App.css"
import PostItem from "./PostItem/PostItem";
import PostList from "./PostList/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import PostForm from "./PostForm/PostForm";

function App() {
  
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript1', description: 'JS - язык программирования'},
    {id:2, title: 'JavaScript2', description: 'JS - язык программирования'},
    {id:3, title: 'JavaScript3', description: 'JS - язык программирования'}
  ])

  const createPost = (newPost) => {
    setPosts ([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return(
    <div className="wrapper">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title='Список 1'/>
    </div>
  )
}

export {App};
