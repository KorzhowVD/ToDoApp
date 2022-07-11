import React, { useState } from "react";
import Counter from "./Counter/Counter";
import "../styles/App.css"
import PostItem from "./PostItem/PostItem";
import PostList from "./PostList/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {
  
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript1', description: 'JS - язык программирования'},
    {id:2, title: 'JavaScript2', description: 'JS - язык программирования'},
    {id:3, title: 'JavaScript3', description: 'JS - язык программирования'}
  ])

  return(
    <div className="wrapper">
      <form>
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Список 1'/>
    </div>
  )
}

export {App};
