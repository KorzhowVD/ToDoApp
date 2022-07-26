import { useState, useEffect } from "react";
import "../styles/App.css"
import PostList from "../components/PostList/PostList";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import { useFetcing } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import MyButton from './../components/UI/button/MyButton';
import PostForm from './../components/PostForm/PostForm';
import PostFilter from './../components/PostFilter/PostFilter';
import MyModal from './../components/UI/modal/MyModal';
import Preloader from './../components/UI/preloader/Preloader';
import { useRef } from "react";
import { useObserver } from './../hooks/useObserver';

function Posts() {
  
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort:'', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts,filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState (0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetcing(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  
  const createPost = (newPost) => {
    setPosts ([...posts, newPost])
    setModal(false)
  }

  useObserver (lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

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
      <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список 1'/>
      <div ref={lastElement}></div>
      {isPostsLoading &&
        <div className="wrapperPreloader"><Preloader/></div>
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Posts;