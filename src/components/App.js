import React, { useRef, useState, useMemo } from "react";
import Counter from "./Counter/Counter";
import "../styles/App.css"
import PostItem from "./PostItem/PostItem";
import PostList from "./PostList/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import PostForm from "./PostForm/PostForm";
import MySelect from "./UI/select/MySelect";
import PostFilter from "./PostFilter/PostFilter";
import MyModal from "./UI/MyModal/MyModal";

function App() {
  
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', description: 'JS - язык программирования'},
    {id:2, title: 'Python', description: 'ython - язык программирования'},
    {id:3, title: 'C++', description: 'Язык программирования'}
  ])

  const [filter, setFilter] = useState({sort:'', query: ''})
  const [modal, setModal] = useState(false)
  

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } 
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchPosts = useMemo (() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts ([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return(
    <div className="wrapper">
      <MyButton onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible = {setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список 1'/>
    </div>
  )
}

export {App};
