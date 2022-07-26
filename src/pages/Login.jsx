import React from 'react'
import { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from './../context/index';

function Login() {
	
	const {isAuth, setIsAuth} = useContext(AuthContext)
	const login = event => {
		event.preventDefault()
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}
	
	return (
		<div>
			<form onSubmit={login}>
				<h3>Login Form</h3>
				<MyInput type='text' placeholder='Введите логин'/>
				<MyInput type='password' placeholder='Введите пароль'/>
				<MyButton>Войти</MyButton>
			</form>
		</div>
	)
}

export default Login