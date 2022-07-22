import { Navigate, Route, Routes } from "react-router-dom";
import Error from '../../pages/Error';
import About from './../../pages/About';
import Posts from '../../pages/Posts';
import PostIdPage from './../../pages/PostIdPage';


function AppRouter() {
	return (
		<Routes>
			<Route path="/about" element={<About/>}/>
			<Route path="/" element={<Posts/>}/>
			<Route path="/posts" element={<Posts/>}/>
			<Route path='/posts/:id' element={<PostIdPage/>}/>
			<Route path='/error' element={<Error/>}/>
			<Route path='/*' element={<Navigate to='/error' replace/>}/>
		</Routes>
	)
}

export default AppRouter