import React, { useRef, useState, useMemo, useEffect } from "react";
import Counter from "./Counter/Counter";
import "../styles/App.css"
import PostItem from "./PostItem/PostItem";
import PostList from "./PostList/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import PostForm from "./PostForm/PostForm";
import MySelect from "./UI/select/MySelect";
import PostFilter from "./PostFilter/PostFilter";
import MyModal from "./UI/modal/MyModal";
import { usePosts } from "../hooks/usePosts";
import axios from 'axios';
import PostService from "../API/PostService";
import Preloader from "./UI/preloader/Preloader";
import { useFetcing } from "../hooks/useFetching";

function App() {
  
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort:'', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts,filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetcing(async () => {
    const posts = await PostService.getAll();
    setPosts(posts)
  })
  
  const createPost = (newPost) => {
    setPosts ([...posts, newPost])
    setModal(false)
  }

  useEffect (() => {
    fetchPosts()
    console.log('useEff')
  }, [])


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
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div className="wrapperPreloader"><Preloader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список 1'/>
      }
      
    </div>
  )
}

export {App};
