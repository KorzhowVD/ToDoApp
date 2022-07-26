import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './../../../context/index';
import MyButton from '../button/MyButton';

function Navbar() {
	const {isAuth, setIsAuth} = useContext(AuthContext)
	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}

	return (
		<div className='headerWrapper'>
			<nav className="navbar">
				<Link to="/about">О сайте</Link>
				<Link to="/posts">Посты</Link>
			</nav>
			<MyButton className="navbar__btn" onClick={logout}>Выйти</MyButton>
		</div>
	)
}

export default Navbar