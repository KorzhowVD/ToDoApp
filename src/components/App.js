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
import { getPageCount, getPagesArray } from "../utils/pages";

function App() {
  
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort:'', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts,filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState (0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const pageArray = getPagesArray(totalPages)

  const [fetchPosts, isPostsLoading, postError] = useFetcing(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  
  const createPost = (newPost) => {
    setPosts ([...posts, newPost])
    setModal(false)
  }

  useEffect (() => {
    fetchPosts()
  }, [page])

  const changePage = (page) => {
    setPage(page)
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
      {postError &&
        <h1>Произошла ошибка: {postError}</h1>
      }
      {isPostsLoading
        ? <div className="wrapperPreloader"><Preloader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список 1'/>
      }
      <div className="wrapperPage">
        {pageArray.map(p => 
          <button 
            onClick={() => changePage(p)}
            key={p} 
            className={page === p ? 'pageNumber pageNumber__current' : 'pageNumber'}
          >
            {p}
          </button>)}
      </div>  
    </div>
  )
}

export {App};
