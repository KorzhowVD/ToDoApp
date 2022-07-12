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

function App() {
  
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', description: 'JS - язык программирования'},
    {id:2, title: 'Python', description: 'ython - язык программирования'},
    {id:3, title: 'C++', description: 'Язык программирования'}
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } 
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchPosts = useMemo (() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts ([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort)
  }

  return(
    <div className="wrapper">
      <PostForm create={createPost}/>
      <PostFilter />
      {sortedAndSearchPosts.length !== 0
        ?
        <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список 1'/>
        :
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены!
        </h1>
      }
      
    </div>
  )
}

export {App};
