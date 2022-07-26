import { Navigate, Route, Routes } from "react-router-dom";
import Error from '../../pages/Error';
import About from './../../pages/About';
import Posts from '../../pages/Posts';
import PostIdPage from './../../pages/PostIdPage';
import { privateRoutes, publicRoutes } from './../../router/routes';
import { useContext } from "react";
import { AuthContext } from './../../context/index';
import Preloader from "../UI/preloader/Preloader";


function AppRouter() {
	const {isAuth, isLoading} = useContext(AuthContext)

	if (isLoading) {
		return <Preloader/>
	}

	return (
		isAuth
			?		
				<Routes>
					{privateRoutes.map(route => 
						<Route 
							path={route.path} 
							element={<route.element/>}
							key={route.path}
						/>
					)}
					<Route path='/*' element={<Navigate to='/posts' replace/>}/>
				</Routes>				
			:
				<Routes>			
					{publicRoutes.map(route => 
							<Route 
								path={route.path} 
								element={<route.element/>}
								key={route.path}
							/>
						)}
						<Route path='/*' element={<Navigate to='/login' replace/>}/>								
				</Routes>
	)
}

export default AppRouter