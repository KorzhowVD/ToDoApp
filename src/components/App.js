import React, { useRef, useState } from "react";
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

  const [post, setPost] = useState ({title:'', description:''})


  const addNewPost = (event) => {
    // для того, чтобы не обновлялась страница после нажатия на кнопку
    event.preventDefault() 
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title:'', description:''})
  }
  

  return(
    <div className="wrapper">
      <form>
        {/* Управляемый компонент */}
        <MyInput 
          value={post.title} 
          onChange={event => setPost({...post, title: event.target.value})}
          type="text" 
          placeholder="Название поста" 
        />
        <MyInput
          value={post.description} 
          onChange={event => setPost({...post, description: event.target.value})}          
          type="text" 
          placeholder="Описание поста" 
        />
        {/* Неуправляемый/неконтролируемый компонент
        <MyInput
          ref={bodyInputRef}
          type="text" 
          placeholder="Описание поста" 
        /> */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Список 1'/>
    </div>
  )
}

export {App};
