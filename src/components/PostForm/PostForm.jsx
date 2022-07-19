import React, {useState} from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import classes from '../PostForm/PostForm.module.css'

const PostForm = ({create}) => {
	const [post, setPost] = useState ({title:'', body:''})

	const addNewPost = (event) => {
    // для того, чтобы не обновлялась страница после нажатия на кнопку
    event.preventDefault() 
    const newPost = {
			...post,
			id: Date.now()
		}
		create(newPost)
    setPost({title:'', body:''})
  }

	return (
		<form className={classes.wrapperForm} >
			{/* Управляемый компонент */}
			<MyInput 
				value={post.title} 
				onChange={event => setPost({...post, title: event.target.value})}
				type="text" 
				placeholder="Название поста" 
			/>
			<MyInput
				value={post.body} 
				onChange={event => setPost({...post, body: event.target.value})}          
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
	)
}

export default PostForm;