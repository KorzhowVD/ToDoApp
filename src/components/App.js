import React, { useState } from "react";
import Counter from "./Counter/Counter";
import "../styles/App.css"
import PostItem from "./PostItem/PostItem";
import PostList from "./PostList/PostList";

function App() {
  
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript1', description: 'JS - язык программирования'},
    {id:2, title: 'JavaScript2', description: 'JS - язык программирования'},
    {id:3, title: 'JavaScript3', description: 'JS - язык программирования'}
  ])

  return(
    <div className="wrapper">
      <PostList posts={posts}/>
    </div>
  )
}

export {App};
