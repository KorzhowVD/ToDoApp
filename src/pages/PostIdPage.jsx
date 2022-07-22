import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import Preloader from '../components/UI/preloader/Preloader';
import { useFetcing } from '../hooks/useFetching';
import PostService from '../API/PostService';

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState ({})
	const [comments, setComments] = useState([])
  const [fetchPostById, isPostsLoading, postError] = useFetcing(async (id) => {
    const response = await PostService.getById(params.id)
		setPost(response.data)
  })
	//Запрос на получение комментов
	const [fetchComments, isCommLoading, commError] = useFetcing(async (id) => {
    const response = await PostService.getComments(params.id)
		setComments(response.data)
  })

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])
	return (
		<div>
			{isPostsLoading
				? <Preloader/>
				: <div>{post.id}. {post.title}</div>
			}
			<div>
				<h1>Комментарии:</h1>
				{isCommLoading
					? <Preloader/>
					: <div>
						{comments.map(comm => 
							<div style={{marginTop: 15}}>
								<h3>{comm.email}</h3>
								<div>{comm.body}</div>
							</div>
						)}
					</div>
				}
			</div>
		</div>
	)
}

export default PostIdPage